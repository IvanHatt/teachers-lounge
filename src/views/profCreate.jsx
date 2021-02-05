import React from "react";
import image from "assets/teaching-rafiki.svg";
import { initialFormValues, profSchema } from "services/profService";
import ProfCreateForm from "components/prof-create-form";
import Header from "components/header";

const ProfCreate = (props) => {
  return (
    <React.Fragment>
      <Header title="Create your Card" description="Create" />
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-8">
            <img className="img-fluid w-80" src={image} alt="signin" />
          </div>
        </div>
        <div className="row">
          <ProfCreateForm
            initialFormValues={initialFormValues}
            profSchema={profSchema}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfCreate;
