import Header from "components/header";
import React from "react";
import hifiImg from "assets/hifi-rafiki.svg";
import contactImg from "assets/contact-rafiki.svg";
import ContactForm from "components/contact-form";

const About = () => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-xl-6 col-lg-5 col-md-8">
            <img className="img-fluid w-80" src={hifiImg} alt="learning" />
          </div>
          <div className="col-xl-6 col-lg-7 col-md-12">
            <h1 className="text-center">Our Story</h1>
            <p className="text-justify">
              Welcome to The Teachers' Lounge, your number one source for
              finding teh best teacher. We're dedicated to giving you the very
              best of service, with a focus on quality, technology and
              reliability. Founded in 2010 by John Doe, The Teachers' Lounge has
              come a long way from its beginnings in Tel Aviv. When Johm first
              started out,his passion for learning drove him to develop a system
              so that The Teachers' Lounge can offer you a great Network. We now
              serve customers all over Israel, and are thrilled that we're able
              to turn our passion into our own website. We hope you enjoy our
              products as much as we enjoy offering them to you. If you have any
              questions or comments, please don't hesitate to contact us.
              Sincerely, John Doe
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-xl-6 col-lg-7 col-md-12 mt-5">
            <ContactForm />
          </div>
          <div className="col-xl-6 col-lg-5 col-md-8">
            <img className="img-fluid w-100" src={contactImg} alt="learning" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
