"use client";

import { useQuery } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { fetchCampersFilters } from "@/services/api";
import css from "./Filter.module.css";
import { MdOutlineClose } from "react-icons/md";
import { SlMap } from "react-icons/sl";

interface FilterValues {
  location: string;
  form: string;
  engine: string;
  transmission: string;
}

interface FilterProps {
  onFilter: (values: FilterValues) => void;
}

export default function Filter({ onFilter }: FilterProps) {
  const { data: filterOptions } = useQuery({
    queryKey: ["campers-filters"],
    queryFn: fetchCampersFilters,
  });

  const initialValues: FilterValues = {
    location: "",
    form: "",
    engine: "",
    transmission: "",
  };

  const handleSubmit = (values: FilterValues) => {
    onFilter(values);
  };

  return (
    <aside className={css.sidebar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ resetForm }) => (
          <Form className={css.form}>
            {/* Блок Location */}
            <div className={css.field}>
              <label htmlFor="location" className={css.label}>
                Location
              </label>
              <div className={css.inputWrapper}>
                <Field
                  type="text"
                  name="location"
                  id="location"
                  placeholder="City"
                  className={css.input}
                />
                <SlMap className={css.mapIcon} size={20} />
              </div>
            </div>

            <h3 className={css.title}>Filters</h3>

            {/* Блок Camper form (динамічний масив з бекенду) */}
            <div className={css.group}>
              <p className={css.groupTitle}>Camper form</p>
              {filterOptions?.forms?.map((formItem: string) => (
                <label className={css.radioLabel} key={formItem}>
                  <Field
                    type="radio"
                    name="form"
                    value={formItem}
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  {formItem.replace("_", " ").charAt(0).toUpperCase() +
                    formItem.slice(1).replace("_", " ")}
                </label>
              ))}
            </div>

            {/* Блок Engine (динамічний масив з бекенду) */}
            <div className={css.group}>
              <p className={css.groupTitle}>Engine</p>
              {filterOptions?.engines?.map((engineItem: string) => (
                <label className={css.radioLabel} key={engineItem}>
                  <Field
                    type="radio"
                    name="engine"
                    value={engineItem}
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  {engineItem.charAt(0).toUpperCase() + engineItem.slice(1)}
                </label>
              ))}
            </div>

            {/* Блок Transmission (динамічний масив з бекенду) */}
            <div className={css.group}>
              <p className={css.groupTitle}>Transmission</p>
              {filterOptions?.transmissions?.map((transmissionItem: string) => (
                <label className={css.radioLabel} key={transmissionItem}>
                  <Field
                    type="radio"
                    name="transmission"
                    value={transmissionItem}
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  {transmissionItem.charAt(0).toUpperCase() +
                    transmissionItem.slice(1)}
                </label>
              ))}
            </div>

            {/* Кнопка пошуку */}
            <button type="submit" className={css.searchButton}>
              Search
            </button>

            {/* Кнопка скидання фільтрів */}
            <button
              type="button"
              onClick={() => {
                resetForm();
                onFilter(initialValues);
              }}
              className={css.clearButton}
            >
              <MdOutlineClose className={css.closeIcon} size={24} />
              Clear filters
            </button>
          </Form>
        )}
      </Formik>
    </aside>
  );
}
