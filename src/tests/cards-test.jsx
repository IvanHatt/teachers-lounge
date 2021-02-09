import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Thumb from "./formik";

class TestFile extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{ profName: null }}
          onSubmit={(values) => {}}
          validationSchema={yup.object().shape({
            profName: yup.mixed().required(),
          })}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="file">File upload</label>
                  <input
                    id="profName"
                    name="profName"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("profName", event.currentTarget.files[0]);
                    }}
                    className="form-control"
                  />
                  <Thumb file={values.profName} />
                </div>
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </form>
            );
          }}
        />
      </div>
    );
  }
}

export default TestFile;
