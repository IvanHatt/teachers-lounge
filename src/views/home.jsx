import React, { Component } from "react";
import teacherImg from "assets/teacher-rafiki.svg";
import headerImg from "assets/learning-rafiki.svg";
import BannerAdv from "components/bannerAdv";
//import BoxAdv from "components/boxAdv";
import BoxListAdv from "components/boxListAdv";
// import Explore from "components/explore"; **see if ok to add ***
import Review from "components/review";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <BannerAdv
          title={"Find the best teacher"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium asperiores autem iure nam reprehenderit numquam dolor est tenetur omnis explicabo voluptatum fugiat blanditiis, totam esse voluptatem harum saepe eos enim."
          }
          image={headerImg}
        />
        <BoxListAdv
          image={teacherImg}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis voluptas ex quis ipsam incidunt quidem quia minus quaerat earum, odit, repellat necessitatibus, aspernatur veniam officia aliquid fugiat a? Et, accusamus?"
          }
          title={"Learn new skills online with top educators"}
          items={["Item1", "Item2", "Item3"]}
        />
        <Review />
      </React.Fragment>
    );
  }
}

export default Home;
