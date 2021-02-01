import React from "react";

const SidebarSearch = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-2 col-lg-2 d-md-block sidebar collapse"
    >
      <div className="sidebar-sticky pt-3">
        <h1>Filter</h1>
        <div className="nav flex-column">
          <form action="">
            <div className="nav-item">
              <label htmlFor="">Pick a city</label>
              <select name="" id="">
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
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SidebarSearch;
