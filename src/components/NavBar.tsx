import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//
const NavBar = () => {
  return (
    <Fragment>
      <header style={{ background: "violet" }}>
        <h1>Nuestros clientes satisfechos</h1>
        <Link to="/">
          <div className="image2"></div> <p className="p">Home</p>
        </Link>

        <nav className="autom">
          <ul>
            <li>
              <Link to="/maria">Viajes Maria</Link>
            </li>
            <li>
              <Link to="/juanito">Viajes Juanito</Link>
            </li>
            <li>
              <Link to="/jhon">Viajes Jhon</Link>
            </li>
          </ul>

          <br />
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
