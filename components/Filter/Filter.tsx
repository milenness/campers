import { Formik, Form, Field } from "formik";
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
  const initialValues: FilterValues = {
    location: "",
    form: "",
    engine: "",
    transmission: "",
  };

  const handleSubmit = (values: FilterValues) => {
    onFilter(values);
  };

  const handleReset = (resetForm: () => void) => {
    resetForm();
    onFilter({ location: "", form: "", engine: "", transmission: "" });
  };

  return (
    <aside className={css.sidebar}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
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

            {/* Блок Camper form (радіокнопки) */}
            <div className={css.group}>
              <p className={css.groupTitle}>Camper form</p>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="form"
                  value="alcove"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Alcove
              </label>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="form"
                  value="panel_van"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Panel Van
              </label>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="form"
                  value="integrated"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Integrated
              </label>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="form"
                  value="semi_integrated"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Semi Integrated
              </label>
            </div>

            {/* Блок Engine */}
            <div className={css.group}>
              <p className={css.groupTitle}>Engine</p>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="engine"
                  value="diesel"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Diesel
              </label>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="engine"
                  value="petrol"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Petrol
              </label>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="engine"
                  value="hybrid"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Hybrid
              </label>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="engine"
                  value="electric"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Electric
              </label>
            </div>

            {/* Блок Transmission */}
            <div className={css.group}>
              <p className={css.groupTitle}>Transmission</p>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="transmission"
                  value="automatic"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Automatic
              </label>
              <label className={css.radioLabel}>
                <Field
                  type="radio"
                  name="transmission"
                  value="manual"
                  className={css.radioInput}
                />
                <span className={css.customRadio}></span>
                Manual
              </label>
            </div>

            {/* Кнопка пошуку */}
            <button type="submit" className={css.searchButton}>
              Search
            </button>

            {/* Кнопка скидання фільтрів */}
            <button
              type="button"
              onClick={() => handleReset(resetForm)}
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
