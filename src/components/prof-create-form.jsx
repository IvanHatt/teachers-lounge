import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import * as Yup from "yup";
import { profService } from "services/profService";
import "components/css/forms.css";
import SelectInput from "helpers/selectInput";
import { cities, categories } from "config/default.json";
import Prof from "./prof";
import { profPlaceholder } from "config/default.json";

const zeroValues = {
  profName: "",
  profTitle: "",
  profCity: "",
  profDescription: "",
  profEmail: "",
  profPhone: "",
  profImage: "",
  profPrice: "",
};

const ProfCreateForm = (props) => {
  const [profPreview, setProfPreview] = useState(profPlaceholder);
  const [initialValues, setInitialValues] = useState(zeroValues);
  if (props.profEdit) setInitialValues(props.profEdit);
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          profName: Yup.string()
            .min(2, "Min 2 characters!")
            .max(255, "Too long!")
            .required("Required!"),
          profTitle: Yup.string()
            .min(2, "Min 2 characters!")
            .max(255, "Too long!")
            .required("Required!"),
          profCity: Yup.string()
            .min(2, "Min 2 characters!")
            .max(255, "Too long!")
            .required("Required!"),
          profDescription: Yup.string().min(2).max(1024).required("Required!"),
          profEmail: Yup.string()
            .min(6, "Min 6 characters!")
            .max(255, "Too long!")
            .required("Required!")
            .email("Invalid Email"),
          profPhone: Yup.string()
            .min(9, "Min 9 numbers!")
            .max(15, "Too long!")
            .required("Required!")
            .matches(/\d{10,15}/, "Only numbers!"),
          profImage: Yup.string().url().nullable(),
          profPrice: Yup.string().min(1).max(4).required(),
        })}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => profService.createProf(values)}
      >
        {(props) => (
          <div className="col-xl-6 col-lg-7 col-md-12">
            <Form className="form-default">
              <div className="login-form">
                <TextInput label="Name" name="profName" type="text" />

                <SelectInput
                  label="Title"
                  name="profTitle"
                  options={categories}
                />
                <SelectInput label="City" name="profCity" options={cities} />
                <TextInput label="Price" name="profPrice" type="text" />

                <TextInput
                  label="Email Address"
                  name="profEmail"
                  type="email"
                />
                <TextInput label="Phone" name="profPhone" type="text" />
                <TextInput label="Image" name="profImage" type="text" />

                <TextInput
                  label="Description"
                  name="profDescription"
                  type="textarea"
                />

                <button type="submit" className="btn-styled">
                  Submit
                </button>
                <button
                  onClick={() => setProfPreview(props.values)}
                  type="button"
                  className="btn-styled"
                >
                  Preview
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>

      <Prof prof={profPreview} />
    </React.Fragment>
  );
};

export default ProfCreateForm;
