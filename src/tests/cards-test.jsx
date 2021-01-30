import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faAt,
  faPhone,
  faGraduationCap,
  faMapMarkerAlt,
  faStar,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import "tests/cards-test.css";
import { Formik, Form } from "formik";
import TextInput from "helpers/textInput";
import * as Yup from "yup";
import { profService } from "services/profService";
import SelectInput from "helpers/selectInput";
import { cities, categories } from "config/default.json";

const CardsTest = () => {
  const prof = {
    profName: "Sebi Hattemer",
    profTitle: "German",
    profCity: "Ashdod",
    profDescription:
      "Biology, This is a wider card with supporting text below as a natural lead-in to additional content, supporting text below as a natural ",
    profEmail: "mari@de.de",
    profPhone: "044444444",
    profPrice: "300",
    profImage:
      "https://scontent.fsdv1-2.fna.fbcdn.net/v/t31.0-8/18920731_1054291061371251_3460332876391398025_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=hJXqIxlnIqwAX-FPP9O&_nc_ht=scontent.fsdv1-2.fna&oh=5137d90b4b61b9ea02f0e4d93a5622ae&oe=603A1F53",
  };

  const {
    profName,
    profTitle,
    profCity,
    profDescription,
    profEmail,
    profImage,
    profPhone,
    profPrice,
  } = prof;
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          profName: "",
          profTitle: "",
          profCity: "",
          profDescription: "",
          profEmail: "",
          profPhone: "",
          profImage: "",
          profPrice: "",
        }}
        validationSchema={Yup.object({
          profName: Yup.string().min(2).max(255).required(),
          profTitle: Yup.string().min(2).max(255).required(),
          profCity: Yup.string().min(2).max(255).required(),
          profDescription: Yup.string().min(2).max(1024).required(),
          profEmail: Yup.string().min(6).max(255).required().email(),
          profPhone: Yup.string()
            .min(9)
            .max(15)
            .required()
            .matches(/^0[2-9]\d{7,8}$/),
          profImage: Yup.string().url().nullable(),
          profPrice: Yup.string().min(1).max(4).required(),
        })}
        onSubmit={(values) => profService.createProf(values)}
      >
        <Form>
          <div className="prof-container">
            <div className="card mx-auto mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <a href="/" className="favorite-icon icon-top mob">
                    <FontAwesomeIcon icon={faStar} />
                  </a>
                  <div className="prof-image">
                    <img
                      src={profImage}
                      className="img-radius"
                      alt="User-Profile"
                    ></img>
                  </div>
                  <div className="card-body-details">
                    <h3 className="prof-name mob">
                      <TextInput
                        style={{ width: "30px" }}
                        label="Name"
                        name="profName"
                        type="text"
                      />
                    </h3>
                    <ul className="prof-details">
                      <li className="mob">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span>{profTitle} Teacher</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faDollarSign} />
                        <span>
                          <TextInput
                            placeholder={profPrice}
                            name="profPrice"
                            type="text"
                          />{" "}
                          ils per hour{" "}
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>
                          <SelectInput
                            placeholder={profCity}
                            name="profCity"
                            options={cities}
                          />
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAt} />

                        <span>
                          <TextInput
                            placeholder={profEmail}
                            name="profEmail"
                            type="email"
                          />
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>
                          <TextInput
                            placeholdr={profPhone}
                            name="profPhone"
                            type="text"
                          />
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="mob toggle-icon icon-bottom"
                      onClick={() => setToggle(!toggle)}
                    >
                      <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </button>
                  </div>
                </div>
                {toggle && (
                  <div className="p-3 mob">
                    <p>{profDescription}</p>
                  </div>
                )}
                <div className="col-md-8 desk">
                  <div className="prof-header">
                    <h3 className="prof-name mw-80">
                      <TextInput
                        placeholder={profName}
                        name="profName"
                        type="text"
                      />
                    </h3>
                    <ul className="prof-details">
                      <li>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span>
                          <SelectInput
                            placeholder={profTitle}
                            name="profTitle"
                            options={categories}
                          />
                          Teacher
                        </span>
                      </li>
                    </ul>
                    <a href="/" className="favorite-icon icon-top">
                      <FontAwesomeIcon icon={faStar} />
                    </a>
                  </div>
                  <div className="prof-description">
                    <p>
                      <TextInput
                        placeholder={profDescription}
                        name="profDescription"
                        type="text"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TextInput label="Image" name="profImage" type="text" />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default CardsTest;
