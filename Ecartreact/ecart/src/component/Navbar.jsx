import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ml-auto container py-3 shadow-sm">
        <Link className="navbar-brand fw-bold fs-4" to="/home">
          LA COLLECTION
        </Link>
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

        <div
          className="collapse navbar-collapse ml-auto py-2 d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav flex mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"> Login </i>
            </Link>
            <Link to="/register" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"> Register </i>
            </Link>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1">Cart ({state.length})</i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
