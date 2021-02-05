import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";
import Header from "components/header";

class MyProfs extends Component {
  state = {
    profs: [],
  };

  async componentDidMount() {
    const response = await profService.getProfs();
    if (response && response.data.length > 0)
      this.setState({ profs: response.data });
  }

  render() {
    const { profs } = this.state;
    return (
      <React.Fragment>
        <Header title="My Cards" description="This is the Teachers' Lounge!" />
        <div className="container">
          <div className="row">
            {profs.length > 0 ? (
              profs.map((prof) => (
                <Prof key={prof._id} prof={prof} myProfsDisplay={true} />
              ))
            ) : (
              <p>No cards found...</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProfs;
