import Header from "components/header";
import React, { Component } from "react";
import CardsTest from "tests/cards-test";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="About" description="This is the Teachers' Lounge!" />
        <div className="container">
          <div className="row">
            <CardsTest />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
