import React, { useState } from "react";
import { useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Imgplaceholder } from "config/default.json";
import { apiUrl } from "config/default.json";

const ImageInput = ({ label, ...props }) => {
  const [imgPr, setImgPr] = useState(
    `${apiUrl}/profs/${Imgplaceholder.profImage}`
  );
  const [field, meta] = useField(props);
  const fileInput = React.createRef();
  return (
    <div className="form-input">
      <img className="imgPr" src={imgPr} alt="profile" />
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <span className="text-danger">
          <FontAwesomeIcon icon={faTimesCircle} /> {meta.error}
        </span>
      ) : null}
      <input
        {...field}
        {...props}
        id="profImage"
        type="file"
        ref={fileInput}
        accept="image/*"
        onChange={(e) => {
          let reader = new FileReader();
          let file = e.target.files[0];
          if (file) {
            reader.onloadend = () => {
              setImgPr(reader.result);
              //helper.setValue(file);
            };

            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
  );
};

export default ImageInput;
