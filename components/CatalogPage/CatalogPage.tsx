"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import css from "./CatalogPage.module.css";
import Filter from "@/components/Filter";
import CatalogList from "@/components/CatalogList";
import { fetchCampers } from "@/services/api";
import { Camper } from "@/types/camper";

export default function CatalogPage() {
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState({
    location: "",
    form: "",
    engine: "",
    transmission: "",
  });


  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["campers", filters, page],
    queryFn: () => fetchCampers({ ...filters, page, perPage: 4 }),
    placeholderData: (previousData) => previousData,
  });

  const campers =
    (data as { campers?: Camper[]; total?: number })?.campers || [];
  const totalCampers =
    (data as { campers?: Camper[]; total?: number })?.total || 0;
  const hasMore = campers.length < totalCampers;

  const handleApplyFilter = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <section className={css.section}>
      <div className={`container ${css.wrapper}`}>
        <Filter onFilter={handleApplyFilter} />

        <div className={css.contentWrapper}>
          <CatalogList campers={campers} />

          {/* Лоадер при першому завантаженні або зміні фільтрів */}
          {isLoading && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Завантаження...
            </p>
          )}

          {hasMore && !isFetching && (
            <button
              type="button"
              onClick={() => setPage((prev) => prev + 1)}
              className={css.button}
            >
              Load more
            </button>
          )}

          {isFetching && !isLoading && (
            <p style={{ textAlign: "center" }}>Довантаження...</p>
          )}
        </div>
      </div>
    </section>
  );
}
