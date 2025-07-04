import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar sticky-top px-3">
      <Link className="navbar-brand logo-container" to="/">
        <img src="/logo2.png" alt="Logo" className="navbar-logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse font-titillium justify-content-center" id="navbarNav">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link custom-hover active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-hover" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-hover" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-hover" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center ms-auto">
        <a href="mailto:info@xyz.com" className="email-link px-3 text-white small">info@tools4oilandgas.com</a>
        <button className="btn btn-outline-warning p-2 me-2" type="button">Enquire Now</button>
      </div>
    </nav>
  );
};

export default NavBar;
