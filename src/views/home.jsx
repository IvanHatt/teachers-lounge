import React from "react";
import teacherImg from "assets/teacher-rafiki.svg";
import headerImg from "assets/learning-rafiki.svg";
import { userService } from "services/userService";
import BannerAdv from "components/bannerAdv";
import BoxListAdv from "components/boxListAdv";
import Review from "components/review";

const Home = () => {
  const loggedIn = userService.getCurrentUser();
  return (
    <React.Fragment>
      <BannerAdv
        title={"Find the best teacher"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium asperiores autem iure nam reprehenderit numquam dolor est tenetur omnis explicabo voluptatum fugiat blanditiis, totam esse voluptatem harum saepe eos enim."
        }
        image={headerImg}
        loggedIn={loggedIn}
      />
      <BoxListAdv
        image={teacherImg}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis voluptas ex quis ipsam incidunt quidem quia minus quaerat earum, odit, repellat necessitatibus, aspernatur veniam officia aliquid fugiat a? Et, accusamus?"
        }
        title={"Learn online with top educators"}
        loggedIn={loggedIn}
      />
      <Review />
    </React.Fragment>
  );
};

export default Home;
