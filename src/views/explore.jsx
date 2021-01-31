import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";

class Explore extends Component {
  state = {
    profs: [],
  };

  async componentDidMount() {
    const { data } = await profService.getAllProfs();
    if (data && data.length > 0) this.setState({ profs: data });
  }

  render() {
    const { profs } = this.state;
    return (
      <div className="container">
        <h1>Explore all</h1>
        <div className="row">
          <div className="col-12">
            <p>All teachers here...</p>
          </div>
        </div>
        <div className="row">
          {profs.length > 0 ? (
            profs.map((prof) => <Prof key={prof._id} prof={prof} />)
          ) : (
            <p className="text-center">
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Explore;
