import Header from "components/header";
import React, { Component } from "react";
import TestFile from "tests/cards-test";
import { apiUrl } from "config/default.json";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="About" description="This is the Teachers' Lounge!" />
        <img
          src={`${apiUrl}/profs/public/uploads/profImage-1612709784275.jpg `}
          alt="ddd"
        />
        <TestFile />
      </React.Fragment>
    );
  }
}

export default About;

// import React, { useEffect, useState } from "react";
// import { Formik, Form } from "formik";
// import FieldInput from "helpers/fieldInput";
// import { profService } from "services/profService";
// import "components/css/forms.css";
// import { cities, categories } from "config/default.json";
// import Prof from "./prof";

// const ProfEditForm = (props) => {
//   const [profPreview, setProfPreview] = useState(props.initialFormValues);

//   useEffect(() => setProfPreview(props.initialFormValues), [
//     props.initialFormValues,
//   ]);

//   return (
//     <React.Fragment>
//       <Formik
//         initialValues={props.initialFormValues}
//         validationSchema={props.profSchema}
//         validateOnBlur={false}
//         validateOnChange={false}
//         onSubmit={(values) => profService.editProf(values)}
//       >
//         {( props) => (
//           <div className="col-xl-6 col-lg-7 col-md-12">
//             <Form className="form-default">
//               <div className="login-form">
//                 <FieldInput
//                   as="input"
//                   label="Name"
//                   name="profName"
//                   type="text"
//                   //placeholder={profPreview.profName}
//                 />

//                 <FieldInput
//                   as="select"
//                   label="Title"
//                   name="profTitle"
//                   options={categories}
//                 />

//                 <FieldInput
//                   as="select"
//                   label="City"
//                   name="profCity"
//                   options={cities}
//                 />
//                 <FieldInput
//                   as="input"
//                   label="Price"
//                   name="profPrice"
//                   type="text"
//                 />

//                 <FieldInput
//                   as="input"
//                   label="Email Address"
//                   name="profEmail"
//                   type="email"
//                 />
//                 <FieldInput
//                   as="input"
//                   label="Phone"
//                   name="profPhone"
//                   type="text"
//                 />
//                 <FieldInput
//                   as="input"
//                   label="Image"
//                   name="profImage"
//                   type="file"
//                 />

//                 <FieldInput
//                   as="textarea"
//                   label="Description"
//                   name="profDescription"
//                   type="text"
//                   rows="3"
//                 />

//                 <button type="submit" className="btn-styled">
//                   Submit
//                 </button>
//                 <button
//                   onClick={() => setProfPreview(props.values)}
//                   type="button"
//                   className="btn-styled"
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={props.handleReset}
//                   type="button"
//                   className="btn-styled empty"
//                 >
//                   Reset
//                 </button>
//               </div>
//             </Form>
//           </div>
//         )}
//       </Formik>

//       <Prof prof={profPreview} />
//     </React.Fragment>
//   );
// };

// export default ProfEditForm;
