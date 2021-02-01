import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";
// import SidebarSearch from "components/sidebar-search";

class Explore extends Component {
  state = {
    profs: [],
    city: "",
    category: "",
    price: "",
  };

  async componentDidMount() {
    const { data } = await profService.getAllProfs();
    if (data && data.length > 0) this.setState({ profs: data });
  }
  filterCity = (e) => {
    console.log(e.target);
  };
  render() {
    let { profs, city, category, price } = this.state;
    if (city) profs = profs.filter((prof) => prof.profCity === city);
    if (category) profs = profs.filter((prof) => prof.profTitle === category);
    if (price) profs = profs.filter((prof) => prof.profPrice === price);
    return (
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-2 col-lg-2 d-md-block sidebar collapse"
          >
            <div className="sidebar-sticky pt-3">
              <h1>Filter</h1>
              <div className="nav flex-column">
                <div className="nav-item">
                  <label htmlFor="">Pick a city</label>
                  <select name="" id="" onChange={(e) => this.filterCity(e)}>
                    <option value="">a</option>
                    <option value="">b</option>
                    <option value="">c</option>
                  </select>
                </div>
                <div className="nav-item">
                  <label htmlFor="">Pick an area</label>
                  <select name="" id="">
                    <option value="">a</option>
                    <option value="">b</option>
                    <option value="">c</option>
                  </select>
                </div>
                <div className="nav-item">
                  <label htmlFor="">By Price</label>
                  <input type="range" name="points" min="0" max="10" />
                </div>
              </div>
            </div>
          </nav>
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
