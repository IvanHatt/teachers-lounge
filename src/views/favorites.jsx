import Header from "components/header";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { profService } from "services/profService";
import Prof from "components/prof";
import image from "assets/favs-rafiki.svg";

class Favorites extends Component {
  state = {
    profs: [],
  };

  async componentDidMount() {
    const response = await profService.getFavProfs();
    if (response && response.data.length > 0)
      this.setState({ profs: response.data });
  }

  render() {
    const { profs } = this.state;
    return (
      <React.Fragment>
        <Header title="Favorites" description="This is the Teachers' Lounge!" />
        <div className="container">
          <div className="row">
            {profs.length > 0 ? (
              profs.map((prof) => (
                <Prof key={prof._id} prof={prof} favDisplay={true} />
              ))
            ) : (
              <div className="col-12 favsnot">
                <div className="text-center m-5">
                  <h3>No Favorites yet...</h3>
                  <img src={image} alt="favs" />
                  <Link to="/explore" className="text-white d-block">
                    Explore all the teachers, and find your favorite!
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
