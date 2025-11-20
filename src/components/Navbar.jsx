import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.pPTAvCju3qLb6H6rwQGWRgHaHa"
            alt=""
            height="80"
            width="80"
            className="rounded-circle"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    </div>
  ) 
}

export default Navbar
