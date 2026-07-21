"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import css from "./CatalogPage.module.css";
import Filter from "@/components/Filter";
import CatalogList from "@/components/CatalogList";
import { fetchCampers } from "@/services/api";
import { Camper } from "@/types/camper";
import Loader from "@/components/Loader";
import NoCampersFound from "@/components/NoCampersFound"; // Виправлено шлях імпорту

export default function CatalogPage() {
  const [page, setPage] = useState<number>(1);
  const [filterKey, setFilterKey] = useState<number>(0);

  const [filters, setFilters] = useState({
    location: "",
    form: "",
    engine: "",
    transmission: "",
  });

  const [campers, setCampers] = useState<Camper[]>([]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["campers", filters, page],
    queryFn: () => fetchCampers({ ...filters, page, perPage: 4 }),
    placeholderData: (previousData) => previousData,
  });

  const totalCampers =
    (data as { campers?: Camper[]; total?: number })?.total || 0;

  useEffect(() => {
    if (data) {
      const newCampers = (data as { campers?: Camper[] })?.campers || [];
      if (page === 1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCampers(newCampers);
      } else {
        setCampers((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          const uniqueNewCampers = newCampers.filter(
            (c) => !existingIds.has(c.id),
          );
          return [...prev, ...uniqueNewCampers];
        });
      }
    }
  }, [data, page]);

  const handleApplyFilter = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setPage(1);
  };

  // Єдина функція для повного скидання фільтрів та візуального стану
  const handleClearAll = () => {
    setFilters({
      location: "",
      form: "",
      engine: "",
      transmission: "",
    });
    setPage(1);
    setFilterKey((prev) => prev + 1); // Змушує компонент Filter перемонтуватись і очистити інпути
  };

  const hasMore = campers.length < totalCampers;

  return (
    <section className={css.section}>
      <div className={`container ${css.wrapper}`}>
        {/* key={filterKey} скидає візуальні інпути у фільтрі */}
        <Filter key={filterKey} onFilter={handleApplyFilter} />

        {!isLoading && campers.length === 0 ? (
          <NoCampersFound
            onClearFilters={handleClearAll}
            onViewAll={handleClearAll}
          />
        ) : (
          <div className={css.contentWrapper}>
            <CatalogList campers={campers} />

            {hasMore && !isFetching && (
              <button
                type="button"
                onClick={() => {
                  setPage((prev) => prev + 1);

                  setTimeout(() => {
                    window.scrollBy({
                      top: 300,
                      behavior: "smooth",
                    });
                  }, 100);
                }}
                className={css.button}
              >
                Load more
              </button>
            )}
          </div>
        )}

        {isLoading && <Loader />}
        {isFetching && !isLoading && <Loader />}
      </div>
    </section>
  );
}
