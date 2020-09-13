import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <ul className="center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/breweries">Breweries</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
