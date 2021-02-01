import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";
import SidebarSearch from "components/sidebar-search";

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
      <div className="container-fluid">
        <div className="row">
          <SidebarSearch />
          <div role="main" className="col-md-10 ml-sm-auto col-lg-10 px-md-4">
            <div className="container">
              <h1>Explore all</h1>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
