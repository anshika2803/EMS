import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./App.css";
//import { Button, Modal } from 'react-bootstrap';
function App() {
  const portfolioLinks = [
    {
      title: "JEE MAIN",
      price: "2000",
    },
    {
      title: "NEET",
      price: "2000",
    },
    {
      title: "JEE MAIN 1",
      price: "2000",
    },
    {
      title: "JEE MAIN 2",
      price: "2000",
    },
    {
      title: "NEET 1",
      price: "2000",
    },
    {
      title: "NEET 2",
      price: "2000",
    },
  ];
  return (
    <div className="App">
      {/* <nav
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
                          LOGIN
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Student Login
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Admin Login
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
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
                          REGISTER
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Student Registration
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Admin Registration
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Navbar />

      {/* <header className="mastHead">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://miro.medium.com/max/1400/1*YZjfn52wLI-l_ReW9928EA.jpeg"
                className="d-block w-100"
                alt="1"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.theconversation.com/files/389548/original/file-20210315-17-jupa75.jpg?ixlib=rb-1.1.0&rect=0%2C5%2C1985%2C1299&q=45&auto=format&w=926&fit=clip"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://etonbridgepartners.com/wp-content/uploads/2020/07/Emotional-intelligence-and-leading-through-uncertainty-782x504-1.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header> */}
      <Hero />
      <WhyChooseUs />
      {/* <section className="page-section" id="specializations">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Why Choose Us</h2>
              <h3 className="text-primary">◆◆</h3>
              <h3 className="section-subheading text-muted">
                See Why one should choose this platform for exam preparation.
              </h3>
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <div className="card w-25 p-3 mh-100 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52aD4AiC1CI1oO6qKf4sn-YUC_5-NZIGOgmHJLOiHhAI6dPTG8LLIjyOklKe77GekYn4&usqp=CAU"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <a className="card-title float-lg-start" href="#">
                  UP-TO-DATE EXAM CONTENT
                </a>
                <p className="card-text">
                  Created by Exam Toppers, Experts and Top Faculty across the
                  country. Comprehensive course material updated with latest
                  exam patterns.
                </p>
              </div>
            </div>
            <div className="card w-25 p-3 mh-100 g-col-6 g-col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52aD4AiC1CI1oO6qKf4sn-YUC_5-NZIGOgmHJLOiHhAI6dPTG8LLIjyOklKe77GekYn4&usqp=CAU"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <a className="card-title float-lg-start" href="#">
                  UP-TO-DATE EXAM CONTENT
                </a>
                <p className="card-text">
                  Created by Exam Toppers, Experts and Top Faculty across the
                  country. Comprehensive course material updated with latest
                  exam patterns.
                </p>
              </div>
            </div>
            <div className="card w-25 p-3 mh-100 g-col-6 g-col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52aD4AiC1CI1oO6qKf4sn-YUC_5-NZIGOgmHJLOiHhAI6dPTG8LLIjyOklKe77GekYn4&usqp=CAU"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <a className="card-title float-lg-start" href="#">
                  UP-TO-DATE EXAM CONTENT
                </a>
                <p className="card-text">
                  Created by Exam Toppers, Experts and Top Faculty across the
                  country. Comprehensive course material updated with latest
                  exam patterns.
                </p>
              </div>
            </div>
            <div className="card w-25 p-3 mh-100 g-col-6 g-col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52aD4AiC1CI1oO6qKf4sn-YUC_5-NZIGOgmHJLOiHhAI6dPTG8LLIjyOklKe77GekYn4&usqp=CAU"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <a className="card-title float-lg-start" href="#">
                  UP-TO-DATE EXAM CONTENT
                </a>
                <p className="card-text">
                  Created by Exam Toppers, Experts and Top Faculty across the
                  country. Comprehensive course material updated with latest
                  exam patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Courses portfolioLinks={portfolioLinks}></Courses>

      {/* <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/envato.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/designmodo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/themeforest.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h5 className="text-white">ABOUT US</h5>
              </div>
              <p className="text-white">
                We are passionate about our students advancing their careers
                through continued education. In fact, our Practice Question
                standard are higher than the average! Our motto is “Your Success
                is Our Success” for a reason: we strive to help students write
                their success stories and pursue their dreams.
              </p>
            </div>
            <div className="col">
              <div>
                <h5 className="text-white">POPULAR PACKAGES</h5>
              </div>
              <div className="list-group">
                <a href="#" aria-current="true">
                  NEET
                </a>
                <a href="#">JEE MAIN</a>
                <a href="#">JEE MAIN 1</a>
                <a href="#">JEE MAIN 2</a>
              </div>
            </div>
            <div className="col">
              <div>
                <h5 className="text-white">QUICK LINKS</h5>
              </div>
              <div className="list-group">
                <a href="#" aria-current="true">
                  HOME
                </a>
                <a href="#">ABOUT US</a>
                <a href="#">FEATURES</a>
                <a href="#">TEST PACKAGES</a>
                <a href="#">CONTACT US</a>
              </div>
            </div>
            <div className="col">
              <div>
                <h5 className="text-white">CONTACT US</h5>
              </div>
              <p className="text-white">
                <div>
                  Address : 3rd floor, RK Niwas, Bailey Rd, Rupaspur, Patna,
                  Bihar 801503
                </div>

                <div>Phone: 7349762146</div>
                <div>Email: info@apnalifecare.com</div>
                <div>Website: exam.apnalifecare.com</div>
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />

      {/*   
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Made by Anshika </span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer> */}
    </div>
  );
}
export default App;
