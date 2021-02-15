import React from "react";
import { initialFormValues, profSchema } from "services/profService";
import ProfCreateForm from "components/prof-create-form";
import Header from "components/header";

const ProfCreate = (props) => {
  return (
    <React.Fragment>
      <Header title="Create your Card" description="Advertise yourself!" />
      <div className="container prof-create">
        {/* <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-8">
            <img className="img-fluid w-80" src={image} alt="signin" />
          </div>
        </div> */}
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
