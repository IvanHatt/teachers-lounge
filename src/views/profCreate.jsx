import React from "react";
import { initialFormValues, profSchema } from "services/profService";
import ProfCreateForm from "components/prof-create-form";
import Header from "components/header";

const ProfCreate = (props) => {
  return (
    <React.Fragment>
      <Header title="Create your Card" description="Advertise yourself!" />
      <div className="container prof-create">
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
