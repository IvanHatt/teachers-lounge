import React from "react";

const Prof = ({ prof }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img
          className="p-2"
          src={prof.profImage}
          width="100"
          alt={prof.profName}
        />
        <div className="card-body">
          <h3 className="card-title">{prof.profName}</h3>
          <h5 className="card-title">{prof.profTitle}</h5>
          <p className="card-text">
            <b>Education: </b>
            {prof.profEducation}
            <br />
            {prof.profDescription}
          </p>
          <p className="card-text border-top pt-2">
            <b>Tel: </b>
            {prof.profPhone}
            <br />
            <b>Email: </b>
            {prof.profEmail}
            <br />
            <b>Price: </b>
            {prof.profPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prof;
