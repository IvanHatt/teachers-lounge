import React from "react";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { userService } from "services/userService";
import "components/css/forms.css";

const SignUpForm = (props) => {
  const { title, isProf } = props;
  if (userService.getCurrentUser()) return <Redirect to="/" />;
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validateOnBlur={false}
      validateOnChange={false}
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
      onSubmit={async (values) => {
        values.prof = isProf;
        const { email, password } = values;
        try {
          await userService.signup(values);
          await userService.login(email, password);
          toast("Welcome");
          window.location = isProf ? "/prof-create" : "/";
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            toast.error(ex.response.data);
          } else {
            toast.error("Communication problems.. try again later");
          }
        }
      }}
    > 
      {(props) => (
        <div className="login-body">
          <Form className="form-default">
            <div className="login-form">
              <h2>{title}</h2>
              <TextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Your Name"
              />
              <TextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Your Last Name"
              />
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Email address"
              />
              <TextInput label="Password" name="password" type="password" />
              <button type="submit" className="btn-styled">
                Register
              </button>
              <button
                onClick={props.handleReset}
                type="button"
                className="btn-styled empty"
              >
                Reset
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
