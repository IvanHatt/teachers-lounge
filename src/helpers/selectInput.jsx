import React from "react";
import { useField, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-input">
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <span className="text-danger">
          <FontAwesomeIcon icon={faTimesCircle} /> {meta.error}
        </span>
      ) : null}
      <Field as="select" {...field} {...props}>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
    </div>
  );
};
export default SelectInput;
