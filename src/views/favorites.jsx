import Header from "components/header";
import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";

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
              profs.map((prof) => <Prof key={prof._id} prof={prof} />)
            ) : (
              <p>No cards found...</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
