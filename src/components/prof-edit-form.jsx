import React, { useEffect, useState } from "react";
import { withFormik, Form } from "formik";
import FieldInput from "helpers/fieldInput";
import { profService } from "services/profService";
import "components/css/forms.css";
import {
  cities,
  categories,
  profPlaceholder,
  Imgplaceholder,
} from "config/default.json";
import Prof from "./prof";

const ProfEditForm = (props) => {
  const [profPreview, setProfPreview] = useState(profPlaceholder);
  const [imgPr, setImgPr] = useState(Imgplaceholder.profImage);

  useEffect(() => setProfPreview(props.initialFormValues), [
    props.initialFormValues,
  ]);
  return (
    <React.Fragment>
      <div className="col-xl-6 col-lg-7 col-md-12">
        <Form className="form-default">
          <div className="login-form">
            <FieldInput as="input" label="Name" name="profName" type="text" />

            <FieldInput
              as="select"
              label="Title"
              name="profTitle"
              options={categories}
            />

            <FieldInput
              as="select"
              label="City"
              name="profCity"
              options={cities}
            />
            <FieldInput as="input" label="Price" name="profPrice" type="text" />

            <FieldInput
              as="input"
              label="Email Address"
              name="profEmail"
              type="email"
            />
            <FieldInput as="input" label="Phone" name="profPhone" type="text" />
            <div className="form-input">
              <label htmlFor="file">File upload</label>
              <input
                id="profImage"
                name="profImage"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  let reader = new FileReader();
                  let file = e.target.files[0];
                  if (file) {
                    props.setFieldValue("profImage", file);
                    reader.onloadend = () => {
                      setImgPr(reader.result);
                    };

                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>

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
                setImgPr(Imgplaceholder.profImage);
                props.setFieldValue("profImage", "");
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
      <Prof prof={profPreview} imgPr={imgPr} />
    </React.Fragment>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: (props) => props.initialFormValues,
  enableReinitialize: true,
  validationSchema: (props) => props.profSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(ProfEditForm);

export default MyEnhancedForm;
