import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "./loginForm.css";

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values: any, { setSubmitting }) => {
      setTimeout(() => {
        if (typeof (Storage) !== "undefined") {
          localStorage.setItem("username", values.email);
          localStorage.setItem("password", values.password);
        }
        setSubmitting(false);
        window.location.assign("/dashboard");
      }, 500);
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {(props: any) => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <Form onSubmit={handleSubmit} >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={(errors.password && touched.password) || (errors.email && touched.email) || !(values.password && values.email)}>
            Login
          </button>
          <b>
            *Dummy Login Page
          </b>
        </Form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
