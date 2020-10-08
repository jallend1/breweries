import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper green darken-1 ">
          <ul className="navbaritems">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/breweries">Breweries</NavLink>
            </li>
            <li>
              <NavLink to="/states">By State</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
