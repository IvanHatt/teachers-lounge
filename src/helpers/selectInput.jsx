import React from "react";
import { useField, Field } from "formik";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-input">
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field as="select" {...field} {...props}>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default SelectInput;
