import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-responsive-modal";
import "./css/style.css";
import "react-responsive-modal/styles.css";
const Headerr = () => {
  // Login Modal state functions
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // Signup Modal state functions
  const [openSignup, setSignupOpen] = useState(false);
  const onOpenSignupModal = () => setSignupOpen(true);
  const onCloseSignupModal = () => setSignupOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          EDUCATION
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Test Packages
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/dashboard"
                // className="nav-link scrollto"
                // data-bs-toggle="modal"
                // data-bs-target="#loginmod"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={onOpenSignupModal}>
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={onOpenModal}>
                Login
              </a>
            </li>

            {/* Sign up model */}

            <Modal open={openSignup} onClose={onCloseSignupModal} center>
              <div className="modal-body">
                <h2>Sign Up</h2>
                <form
                  className="contact-form form-validate3"
                  novalidate="novalidate"
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="First Name"
                      required=""
                      autocomplete="off"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      required=""
                      autocomplete="off"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="pass"
                      className="form-control"
                      placeholder="Password"
                      required=""
                      autocomplete="off"
                      aria-required="true"
                    />
                  </div>
                  <input
                    className="btn btn-md btn-primary btn-center"
                    id="sign_up"
                    type="button"
                    value="Sign Up"
                  />
                </form>
              </div>
            </Modal>

            {/* <!-- signUp End --> 
                 <!-- login --> */}

            <Modal open={open} onClose={onCloseModal} center>
              <div className="modal-body">
                <h2>
                  Login and Get <span>Started</span>
                </h2>
                <form
                  className="contact-form form-validate4"
                  novalidate="novalidate"
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      required=""
                      autocomplete="off"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="pass"
                      className="form-control"
                      placeholder="Password"
                      required=""
                      autocomplete="off"
                      aria-required="true"
                    />
                  </div>
                  <input
                    className="btn btn-md btn-primary btn-center"
                    id="login_btn"
                    type="button"
                    value="Login"
                  />
                </form>
              </div>
            </Modal>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headerr;
