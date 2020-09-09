import React from "react";

const NavBar = (props) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <ul className="center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Breweries</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="input-field">
        <i className="material-icons prefix">search</i>
        <input id="search" type="text" onChange={props.handleSearch}></input>
        <label className="label-icon active"></label>
      </div>
    </>
  );
};

export default NavBar;
