import React from "react";
import { useField, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const FieldInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-input">
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <span className="text-danger">
          <FontAwesomeIcon icon={faTimesCircle} /> {meta.error}
        </span>
      ) : null}
      {props.as === "select" && (
        <Field as={props.as} {...field} {...props}>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      )}
      {props.as === "textarea" && (
        <Field
          as={props.as}
          {...field}
          {...props}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = props.placeholder || "")}
        />
      )}
      {props.as === "input" && <Field as={props.as} {...field} {...props} />}
    </div>
  );
};
export default FieldInput;
