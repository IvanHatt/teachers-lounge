/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { userService } from "services/userService";
import "components/css/forms.css";
import FieldInput from "helpers/fieldInput";
import avatar from "assets/avatar.png";

const SignUpForm = (props) => {
  const [imgPr, setImgPr] = useState(avatar);
  const { title, isProf } = props;
  if (userService.getCurrentUser()) return <Redirect to="/" />;
  return (
    <Formik
      //enableReinitialize={true}
      initialValues={
        isProf
          ? {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              profImage: "",
            }
          : {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }
      }
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={
        isProf ? userService.profUserSchema : userService.userSchema
      }
      onSubmit={async (values) => {
        values.prof = isProf;
        const { email, password, firstName, lastName } = values;
        try {
          await userService.signup(values);
          await userService.login(email, password);
          toast(`Welcome  ${firstName}  ${lastName}`);
          isProf ? (window.location = "/prof-create") : (window.location = "/");
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
              {isProf && (
                <div className="form-input file-input">
                  <label htmlFor="profImage">
                    <img className="imgPr" src={imgPr} alt="profile" />
                    <span>User Image</span>
                  </label>
                  <input
                    id="profImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      let reader = new FileReader();
                      let file = e.target.files[0];
                      if (file) {
                        reader.onloadend = () => {
                          setImgPr(reader.result);
                          props.setFieldValue("profImage", file);
                        };

                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>
              )}
              <FieldInput
                as="input"
                label="First Name"
                name="firstName"
                type="text"
              />
              <FieldInput
                as="input"
                label="Last Name"
                name="lastName"
                type="text"
              />
              <FieldInput
                as="input"
                label="Email Address"
                name="email"
                type="text"
              />
              <FieldInput
                as="input"
                label="Password"
                name="password"
                type="password"
              />
              <button type="submit" className="btn-styled">
                Register
              </button>
              <button
                onClick={() => {
                  props.handleReset();
                  if (isProf) {
                    setImgPr(avatar);
                    props.setFieldValue("profImage", "");
                  }
                }}
                type="button"
                className="btn-styled empty"
              >
                Reset
              </button>
              {!isProf && (
                <Link to="/prof-signup">
                  <span className="text-muted float-right">
                    Are you a Teacher?
                  </span>
                </Link>
              )}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
