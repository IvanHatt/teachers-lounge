import Header from "components/header";
import React, { Component } from "react";

class Favorites extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header title="Favorites" description="This is the Teachers' Lounge!" />
        <div className="container"></div>
      </React.Fragment>
    );
  }
}

export default Favorites;
