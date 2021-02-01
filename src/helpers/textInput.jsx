import React from "react";
import { useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-input">
      <label htmlFor={props.id || props.name}>{label} </label>
      {meta.touched && meta.error ? (
        <span className="text-danger">
          <FontAwesomeIcon icon={faTimesCircle} /> {meta.error}
        </span>
      ) : null}
      <input
        {...field}
        {...props}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = props.placeholder || "")}
      />
    </div>
  );
};

export default TextInput;
