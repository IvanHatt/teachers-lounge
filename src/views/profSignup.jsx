import React from "react";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import * as Yup from "yup";
import { userService } from "services/userService";
import { toast } from "react-toastify";

const ProfSignup = (props) => {
  if (userService.getCurrentUser()) return <Redirect to="/" />;
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, "Must be at least 2 characters")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .min(2, "Must be at least 2 characters")
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6).max(1024).required("Required"),
      })}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (values) => {
        values.prof = true;
        const { email, password } = values;
        try {
          await userService.signup(values);
          await userService.login(email, password);
          toast("Welcome Prof!");
          window.location = "/prof-create";
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            toast.error(ex.response.data);
          } else {
            toast.error("Communication problems.. try again later");
          }
        }
      }}
    >
      <Form>
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Jane"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@formik.com"
        />
        <TextInput label="Password" name="password" type="password" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ProfSignup;
