import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import TextInput from "helpers/textInput";
import * as Yup from "yup";
import { userService } from "services/userService";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  if (userService.getCurrentUser()) return <Redirect to="/" />;
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6).max(1024).required("Required"),
      })}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (values) => {
        const { email, password } = values;
        try {
          await userService.login(email, password);
          toast("Welcome");
          window.location = "/";
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            toast.error(ex.response.data);
          } else {
            toast.error("Communication problems.. try again later");
          }
        }
      }}
    >
      <div className="login-body">
        <Form className="form-default">
          <div className="login-form">
            <h2>Login Here</h2>
            <TextInput label="Email Address" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <button type="submit" className="btn">
              Sign In
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default SignIn;
