import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import './css/style.css'
import icon from './assets/logo-hover.png'
import { Navbar } from 'react-bootstrap';
//import { render } from '@testing-library/react';

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };




    render() {
        const { login, sign } = this.state;
        return (

            <>
                <header className="header header-animated opaque" style={{ "display": 'block', "paddingTop": "5px", "paddingBottom": "5px" }}>
                    <div className="container">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="navbar-header">
                                <a className="logo" href="#">
                                <img className="img-responsive logo" src={icon} alt="" data-logo-alt={icon} />
                                </a>
                            </div>


                            <div className="nav-toggle collapsed" data-toggle="collapse" data-target="#navbarMain" aria-expanded="false" style={{ "top": "15px" }}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="navbar-collapse collapse in" id="navbarMain" aria-expanded="true" style={{ top: "65px" }}>

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <button className="btn btn-primary-outline" id="signup" onClick={this.onOpenModal}>SignUp</button>
                                    </li>
                                    <li>
                                        <button className="btn btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>Login</button>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav collapsed-color">

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

                                </ul>

                            </div>

                            {/* <!-- .navbar-collapse --> */}
                        </nav>
                    </div>

                </header>
                {/* Sign up model */}

                <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>

                {/* <!-- signUp End -->
                  <!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalclose}>
                
                    <div className="modal-body">
                        <form className="contact-form form-validate4" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal>
            </>

        );
    }
}




export default Header;
