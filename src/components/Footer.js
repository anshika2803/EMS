import React from "react";

const Footer = () => {
  return (
    <>
      <section className="page-section" id="contact">
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
      </section>
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
      </footer>
    </>
  );
};

export default Footer;
