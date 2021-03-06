import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./style.css";
const Navbars = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Fiverr
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="my-2 form-inline my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="find services"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="my-2 text-white btn my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ul className="mr-auto navbar-nav">
          <li className="nav-item active ">
            <a className="nav-link" href="#">
              Fiverr Pro <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Explore
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
          <li className="nav-item">
            <a className="nav-link " href="#">
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Lists
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Switch to Selling
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbars;
