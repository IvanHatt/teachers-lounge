import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "../components/prof";

class MyProfs extends Component {
  state = {
    profs: [],
  };

  async componentDidMount() {
    const { data } = await profService.getProfs();
    if (data.length > 0) this.setState({ profs: data });
  }

  render() {
    const { profs } = this.state;
    return (
      <div className="container">
        <h1>My cards</h1>
        <div className="row">
          <div className="col-12">
            <p>Your cards in the list below...</p>
          </div>
        </div>
        <div className="row">
          {profs.length > 0 ? (
            profs.map((prof) => <Prof key={prof._id} prof={prof} />)
          ) : (
            <p>No cards found...</p>
          )}
        </div>
      </div>
    );
  }
}

export default MyProfs;
