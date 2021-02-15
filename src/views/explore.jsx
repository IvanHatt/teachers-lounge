import React, { Component } from "react";
import { profService } from "services/profService";
import Prof from "components/prof";
import { RangeSlider, SelectPicker } from "rsuite";
import { cities, categories } from "config/default.json";
import Header from "components/header";

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
         <div className="col-3">
          <div className="filter">
              <h1>Filter</h1>
                <div className="filter-item">
                  <label htmlFor="">Pick a city</label>
                  <SelectPicker
                    data={cities}
                    onChange={(e) => this.setCity(e)}
                    block={true}
                    placeholder={"By city"}
                  />
                </div>
                <div className="filter-item">
                  <label htmlFor="">Pick an area of study</label>
                  <SelectPicker
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
         <div className="col-9">
           <div className="container" style={{minHeight: '1600px'}}>
              <Header
                title="Explore"
                description="This is the Teachers' Lounge!"
              />
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
