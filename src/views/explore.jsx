import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";
import { RangeSlider, SelectPicker } from "rsuite";
import { cities, categories } from "config/default.json";

import Header from "components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

class Explore extends Component {
  state = {
    profs: [],
    city: "",
    category: "",
    price: [],
  };

  async componentDidMount() {
    const response = await profService.getAllProfs();
    if (response && response.data.length > 0)
      this.setState({ profs: response.data });
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
          <div className="col-lg-3">
            <div className="filter">
              <h1>Filter</h1>
              <button
                className="float-right mt-3 collapse-button"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
              </button>
              <div className="collapse" id="collapseExample">
                <div className="filter-item">
                  <label htmlFor="select-city">Pick a city</label>
                  <SelectPicker
                    menuClassName="item-city big"
                    value={this.state.city}
                    data={cities}
                    onChange={(e) => this.setCity(e)}
                    block={true}
                    placeholder={"By city"}
                  />
                </div>
                <div className="filter-item">
                  <label htmlFor="">Pick an area of study</label>
                  <SelectPicker
                    menuClassName="item-category big"
                    value={this.state.category}
                    data={categories}
                    onChange={(e) => this.setCategory(e)}
                    block={true}
                    placeholder={"By area of study"}
                  />
                </div>
                <div className="filter-item">
                  <label htmlFor="">By Price</label>
                  <RangeSlider
                    min={0}
                    max={500}
                    defaultValue={[0, 1000]}
                    onChange={(e) => this.setPriceRange(e)}
                  />
                </div>
              </div>

              <div className="filter-item">
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
            </div>
          </div>
          <div className="col-lg-9">
            <Header
              title="Explore"
              description="This is the Teachers' Lounge!"
            />
            <div className="container overflow-auto explore-cards">
              <div className="row">
                {profs.length > 0 ? (
                  profs.map((prof) => <Prof key={prof._id} prof={prof} />)
                ) : (
                  <p className="text-center">
                    <span> No Cards found...</span>
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
