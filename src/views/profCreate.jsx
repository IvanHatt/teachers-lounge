import React from "react";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import * as Yup from "yup";
import { profService } from "services/profService";

const ProfCreate = (props) => {
  return (
    <Formik
      initialValues={{
        profName: "",
        profTitle: "",
        profEducation: "",
        profDescription: "",
        profEmail: "",
        profPhone: "",
        profImage: "",
        profPrice: "",
      }}
      validationSchema={Yup.object({
        profName: Yup.string().min(2).max(255).required(),
        profTitle: Yup.string().min(2).max(255).required(),
        profEducation: Yup.string().min(2).max(255).required(),
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
      <Form>
        <TextInput label="Name" name="profName" type="text" />
        <TextInput label="Title" name="profTitle" type="text" />
        <TextInput label="Education" name="profEducation" type="text" />
        <TextInput label="Description" name="profDescription" type="text" />
        <TextInput label="Phone" name="profPhone" type="text" />
        <TextInput label="Image" name="profImage" type="text" />
        <TextInput label="Email Address" name="profEmail" type="email" />
        <TextInput label="Price" name="profPrice" type="text" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ProfCreate;
