import Header from "components/header";
import React, { Component } from "react";
import CardsTest from "tests/cards-test";

class About extends Component {
  state = {};
  render() {
    const prof = {
      profName: "Sebastian Hattemer",
      profTitle: "Physics teacher",
      profDescription:
        "Physics lessons, This is a wider card with supporting text below as a natural lead-in to additional content, supporting text below as a natural ",
      profEmail: "seba@de.de",
      profPhone: "044444444",
      profImage:
        "https://cdn.pixabay.com/photo/2021/01/21/16/44/model-5937809_960_720.jpg",
      profPrice: "150",
      profId: "988693",
    };
    return (
      <React.Fragment>
        <Header title="About" description="This is the Teachers' Lounge!" />
        <div className="container">
          <div className="row">
            <CardsTest key={prof.profId} prof={prof} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
