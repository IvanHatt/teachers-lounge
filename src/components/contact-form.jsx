import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FieldInput from "helpers/fieldInput";
import "components/css/forms.css";

///submit demo, not actually sending email
const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", comment: "" }}
      validationSchema={Yup.object({
        name: Yup.string().min(2).max(1024).required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        comment: Yup.string().min(2).max(1024).required("Required"),
      })}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={() =>
        toast.success("Thanks! We will contact you shortly!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    >
      <div className="login-body">
        <Form className="form-default" autoComplete="off">
          <div className="login-form">
            <h2>Have More questions ? </h2>
            <FieldInput as="input" label="Name" name="name" type="text" />
            <FieldInput as="input" label="Email" name="email" type="email" />
            <FieldInput
              as="textarea"
              label="Comment"
              name="comment"
              type="text"
              rows="3"
            />
            <button type="submit" className="btn-styled">
              Send
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
