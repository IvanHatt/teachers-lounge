import React from "react";
import image from "assets/teaching-rafiki.svg";
import ProfCreateForm from "components/prof-create-form";
import Header from "components/header";

const ProfEdit = (props) => {
  return (
    <React.Fragment>
      <Header title="Edit your Card" description="Edit" />
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-8">
            <img className="img-fluid w-80" src={image} alt="signin" />
          </div>
        </div>
        <div className="row">
          <ProfCreateForm profEdit={false} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfEdit;
