import React from "react";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import * as Yup from "yup";
import { profService } from "services/profService";
import "components/css/forms.css";
import SelectInput from "helpers/selectInput";
import { cities, categories } from "config/default.json";

const ProfCreateForm = (props) => {
  return (
    <Formik
      initialValues={{
        profName: "",
        profTitle: "",
        profCity: "",
        profDescription: "",
        profEmail: "",
        profPhone: "",
        profImage: "",
        profPrice: "",
      }}
      validationSchema={Yup.object({
        profName: Yup.string().min(2).max(255).required(),
        profTitle: Yup.string().min(2).max(255).required(),
        profCity: Yup.string().min(2).max(255).required(),
        profDescription: Yup.string().min(2).max(1024).required(),
        profEmail: Yup.string().min(6).max(255).required().email(),
        profPhone: Yup.string()
          .min(9)
          .max(15)
          .required()
          .matches(/^0[2-9]\d{7,8}$/),
        profImage: Yup.string().url().nullable(),
        profPrice: Yup.string().min(1).max(4).required(),
      })}
      onSubmit={(values) => profService.createProf(values)}
    >
      <div className="login-body">
        <Form className="form-default">
          <div className="login-form">
            <h2>Create your Card here!</h2>
            <TextInput label="Name" name="profName" type="text" />
            <SelectInput label="Title" name="profTitle" options={categories} />
            <SelectInput label="City" name="profCity" options={cities} />
            <TextInput label="Description" name="profDescription" type="text" />
            <TextInput label="Phone" name="profPhone" type="text" />
            <TextInput label="Email Address" name="profEmail" type="email" />
            <TextInput label="Price" name="profPrice" type="text" />
            <TextInput label="Image" name="profImage" type="text" />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ProfCreateForm;
