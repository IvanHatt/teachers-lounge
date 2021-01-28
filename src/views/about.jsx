import Header from "components/header";
import Prof from "components/prof";
import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="About" description="This is the Teachers' Lounge!" />
        <div className="container">
          <div className="row">
            <Prof />
            <Prof />
            <Prof />
            <Prof />
            <Prof />
            <Prof />
            <Prof />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
