import Header from "components/header";
import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="About" description="This is the Teachers' Lounge!" />
      </React.Fragment>
    );
  }
}

export default About;
