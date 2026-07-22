"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdErrorOutline } from "react-icons/md";
import css from "./ConnectForm.module.css";
import { sendBookingRequest } from "@/services/api";
import toast from "react-hot-toast";

interface ConnectFormProps {
  camperId: string;
}

interface FormValues {
  name: string;
  email: string;
}

const ValidationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please enter your name.")
    .min(4, "Please enter your full name.")
    .max(32, "Name is too long."),

  email: Yup.string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),
});

export default function ConnectForm({ camperId }: ConnectFormProps) {
  const initialValues: FormValues = {
    name: "",
    email: "",
  };

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    try {
      const response = await sendBookingRequest(camperId, values);

      toast.success(response.message, {
        duration: 5000,
      });

      resetForm();
    } catch (error) {
      console.error("Error sending booking request:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
    
  return (
    <div className={css.formWrapper}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchemaRegister}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldTouched,
          values,
        }) => (
          <Form className={css.form}>
            {/* Поле Name */}
            <div className={css.fieldWrapperName}>
              <div className={css.inputContainer}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={`${css.input} ${
                    touched.name && errors.name && values.name !== ""
                      ? css.errorInput
                      : ""
                  }`}
                  onBlur={handleBlur}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setFieldTouched("name", false, false);
                  }}
                />
                <span
                  className={`${css.floatingLabel} ${
                    touched.name && errors.name && values.name !== ""
                      ? css.showLabel
                      : ""
                  }`}
                >
                  Name*
                </span>

                {touched.name && errors.name && values.name !== "" && (
                  <MdErrorOutline className={css.errorIcon} size={24} />
                )}
              </div>
              <div style={{ color: "#ec383b" }}>
                {touched.name && values.name !== "" && (
                  <ErrorMessage name="name" component="div" />
                )}
              </div>
            </div>

            {/* Поле Email */}
            <div className={css.fieldWrapperEmail}>
              <div className={css.inputContainer}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={`${css.input} ${
                    touched.email && errors.email && values.email !== ""
                      ? css.errorInput
                      : ""
                  }`}
                  onBlur={handleBlur}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setFieldTouched("email", false, false);
                  }}
                />
                <span
                  className={`${css.floatingLabel} ${
                    touched.email && errors.email && values.email !== ""
                      ? css.showLabel
                      : ""
                  }`}
                >
                  Email*
                </span>

                {touched.email && errors.email && values.email !== "" && (
                  <MdErrorOutline className={css.errorIcon} size={24} />
                )}
              </div>
              <div style={{ color: "#ec383b" }}>
                {touched.email && values.email !== "" && (
                  <ErrorMessage name="email" component="div" />
                )}
              </div>
            </div>

            <button type="submit" className={css.submitButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
