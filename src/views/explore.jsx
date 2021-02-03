import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";
import { RangeSlider, SelectPicker } from "rsuite";

// import SidebarSearch from "components/sidebar-search";
const listCities = [
  { value: "Tel Aviv", label: "Tel Aviv" },
  { value: "Holon", label: "Holon" },
  { value: "Jerusalem", label: "Jerusalem" },
];

const listCategories = [
  { value: "Biology teacher", label: "Biology" },
  { value: "English teacher", label: "English" },
  { value: "German teacher", label: "German" },
];

class Explore extends Component {
  state = {
    profs: [],
    city: "",
    category: "",
    price: [],
  };

  async componentDidMount() {
    const { data } = await profService.getAllProfs();
    if (data && data.length > 0) this.setState({ profs: data });
  }

  setCity = (e) => {
    this.setState({ city: e });
  };

  setCategory = (e) => {
    this.setState({ category: e });
  };

  setPriceRange = (e) => {
    this.setState({ price: e });
  };

  render() {
    let { profs, city, category, price } = this.state;
    if (city) profs = profs.filter((prof) => prof.profCity === city);
    if (category) profs = profs.filter((prof) => prof.profTitle === category);
    if (price.length)
      profs = profs.filter(
        (prof) => prof.profPrice >= price[0] && prof.profPrice <= price[1]
      );
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
                  <SelectPicker
                    data={listCities}
                    onChange={(e) => this.setCity(e)}
                    block={true}
                    placeholder={"By city"}
                  />
                </div>
                <div className="nav-item">
                  <label htmlFor="">Pick an area of study</label>
                  <SelectPicker
                    data={listCategories}
                    onChange={(e) => this.setCategory(e)}
                    block={true}
                    placeholder={"By area of study"}
                  />
                </div>
                <div className="nav-item">
                  <label htmlFor="">By Price</label>
                  <RangeSlider
                    min={0}
                    max={500}
                    defaultValue={[0, 1000]}
                    onChange={(e) => this.setPriceRange(e)}
                  />
                </div>
              </div>
              {city && (
                <button
                  type="button"
                  className="badge badge-pill badge-warning"
                  onClick={() => this.setCity()}
                >
                  {city}
                </button>
              )}
              {category && (
                <button
                  className="badge badge-pill badge-warning"
                  onClick={() => this.setCategory()}
                  type="button"
                >
                  {category}
                </button>
              )}
              {price.length > 0 && (
                <span className="badge badge-pill badge-warning">
                  {price[0]}-{price[1]}
                </span>
              )}
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
