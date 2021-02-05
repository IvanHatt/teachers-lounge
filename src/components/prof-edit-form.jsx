import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import SelectInput from "helpers/selectInput";
import { profService } from "services/profService";
import "components/css/forms.css";
import { cities, categories } from "config/default.json";
import Prof from "./prof";

const ProfEditForm = (props) => {
  const [profPreview, setProfPreview] = useState(props.initialFormValues);

  return (
    <React.Fragment>
      <Formik
        initialValues={props.initialFormValues}
        validationSchema={props.profSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => profService.editProf(values)}
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

export default ProfEditForm;
