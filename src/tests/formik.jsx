import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpFormT = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(50, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6).max(1024).required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="text-center container">
      <form className="form-signin" onSubmit={formik.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label className="sr-only" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          className="form-control"
          {...formik.getFieldProps("fistName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-danger">{formik.errors.firstName}</div>
        ) : null}
        <label className="sr-only" htmlFor="lastName">
          Last Name
        </label>
        <input
          placeholder="Last Name"
          className="form-control"
          id="lastName"
          type="text"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-danger">{formik.errors.lastName}</div>
        ) : null}
        <label className="sr-only" htmlFor="email">
          Email Address
        </label>
        <input
          placeholder="Email address"
          className="form-control"
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default SignUpFormT;
