import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import { profService } from "services/profService";
import "components/css/forms.css";
import SelectInput from "helpers/selectInput";
import { cities, categories } from "config/default.json";
import Prof from "./prof";
import { profPlaceholder } from "config/default.json";

const ProfCreateForm = (props) => {
  const [profPreview, setProfPreview] = useState(profPlaceholder);
  return (
    <React.Fragment>
      <Formik
        initialValues={props.initialFormValues}
        validationSchema={props.profSchema}
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
