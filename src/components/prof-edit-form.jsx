import React, { useEffect, useState } from "react";
import { withFormik, Form } from "formik";
import FieldInput from "helpers/fieldInput";
import { profService } from "services/profService";
import "components/css/forms.css";
import { cities, categories, profPlaceholder } from "config/default.json";
import Prof from "./prof";

const ProfEditForm = (props) => {
  const [profPreview, setProfPreview] = useState(profPlaceholder);
  useEffect(() => setProfPreview(props.initialFormValues), [
    props.initialFormValues,
  ]);

  return (
    <React.Fragment>
      <div className="col-xl-6 col-md-12 mb-5">
        <Form className="form-default">
          <div className="login-form">
            <FieldInput as="input" label="Name" name="profName" type="text" />
            <div className="row">
              <div className="col-md-4">
                <FieldInput
                  as="select"
                  label="Title"
                  name="profTitle"
                  options={categories}
                />
              </div>
              <div className="col-md-4">
                <FieldInput
                  as="select"
                  label="City"
                  name="profCity"
                  options={cities}
                />
              </div>
              <div className="col-md-4">
                <FieldInput
                  as="input"
                  label="Price"
                  name="profPrice"
                  type="text"
                />
              </div>
            </div>

            <FieldInput
              as="input"
              label="Email Address"
              name="profEmail"
              type="email"
            />
            <FieldInput as="input" label="Phone" name="profPhone" type="text" />

            <FieldInput
              as="textarea"
              label="Description"
              name="profDescription"
              type="text"
              rows="3"
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
            <button
              onClick={() => {
                setProfPreview(props.initialFormValues);
                props.handleReset();
              }}
              type="button"
              className="btn-styled empty"
            >
              Reset
            </button>
          </div>
        </Form>
      </div>
      <Prof prof={profPreview} stickPreview={true} favDisable={true} />
    </React.Fragment>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: (props) => props.initialFormValues,
  enableReinitialize: true,
  validationSchema: (props) => props.profSchema,
  handleSubmit: (values) => {
    profService.editProf(values);
  },
})(ProfEditForm);

export default MyEnhancedForm;
