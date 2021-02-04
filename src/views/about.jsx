import Header from "components/header";
import React, { Component } from "react";
import { categories } from "config/default.json";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="About" description="This is the Teachers' Lounge!" />
        <div className="container">
          <div className="row">
            {categories.map((city) => `{"value":"${city}","label":"${city}"},`)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
