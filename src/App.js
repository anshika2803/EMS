import React from 'react';
import Courses from './components/Courses';
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'JEE MAIN',
      price: '2000'
    },
    {
      title: 'NEET',
      price: '2000'
    },
    {
      title: 'JEE MAIN 1',
      price: '2000'
    },
    {
      title: 'JEE MAIN 2',
      price: '2000'
    },
    {
      title: 'NEET 1',
      price: '2000'
    },
    {
      title: 'NEET 2',
      price: '2000'
    }
  ]
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">EDUCATION</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" >
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
          <div class="dropdown">
  <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Test Packages
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">option 1</a></li>
    <li><a class="dropdown-item" href="#">option 2</a></li>
    <li><a class="dropdown-item" href="#">option 3</a></li>
  </ul>
</div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">LOGIN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">REGISTER</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  {/* <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Institute!</div>
        <div className="intro-heading text-uppercase">Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#specializations">Tell Me More</a>
      </div>
    </div>
  </header> */}
  <header className="mastHead">
{/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://thevideoink.com/wp-content/uploads/2019/08/systemic-evaluation.jpg" class="d-block w-100" alt="1"></img>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/01/5-ways-ai-is-changing-the-education-industry-1-1024x574.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCdJd5PQUMfWNMPo6dSQY4VsHQLBgW-66Kw&usqp=CAU" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> 
</div> */}
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="https://thevideoink.com/wp-content/uploads/2019/08/systemic-evaluation.jpg" class="d-block w-100" alt="1"></img>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/01/5-ways-ai-is-changing-the-education-industry-1-1024x574.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCdJd5PQUMfWNMPo6dSQY4VsHQLBgW-66Kw&usqp=CAU" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> 
</div>
</header>

  
  <section className="page-section" id="specializations">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Why Choose Us</h2>
          <h3 className="text-primary">◆◆</h3>
          <h3 className="section-subheading text-muted">See Why one should choose this platform for exam preparation.</h3>
        </div>
      </div>
      <div className="row text-center grid">
      <div class="card w-25 p-3 mh-100 g-col-6 g-col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52aD4AiC1CI1oO6qKf4sn-YUC_5-NZIGOgmHJLOiHhAI6dPTG8LLIjyOklKe77GekYn4&usqp=CAU" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <a class="card-title" href="#">UP-TO-DATE EXAM CONTENT</a>
          <p class="card-text">Created by Exam Toppers, Experts and Top Faculty across the country. Comprehensive course material updated with latest exam patterns.</p>
        </div>
      </div>
      <div class="card w-25 p-3 mh-100 g-col-6 g-col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52aD4AiC1CI1oO6qKf4sn-YUC_5-NZIGOgmHJLOiHhAI6dPTG8LLIjyOklKe77GekYn4&usqp=CAU" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <a class="card-title" href="#">UP-TO-DATE EXAM CONTENT</a>
          <p class="card-text">Created by Exam Toppers, Experts and Top Faculty across the country. Comprehensive course material updated with latest exam patterns.</p>
        </div>
      </div>
      <div class="card w-25 p-3 mh-100 g-col-6 g-col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52aD4AiC1CI1oO6qKf4sn-YUC_5-NZIGOgmHJLOiHhAI6dPTG8LLIjyOklKe77GekYn4&usqp=CAU" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <a class="card-title" href="#">UP-TO-DATE EXAM CONTENT</a>
          <p class="card-text">Created by Exam Toppers, Experts and Top Faculty across the country. Comprehensive course material updated with latest exam patterns.</p>
        </div>
      </div>
      </div>
    </div>
  </section>

  <Courses portfolioLinks={portfolioLinks}></Courses>


  
  

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    {/* <div>ABOUT US</div>
    <p>We are passionate about our students advancing their careers through continued education. In fact, our Practice Question standard are higher than the average! Our motto is “Your Success is Our Success” for a reason: we strive to help students write their success stories and pursue their dreams.</p>
   */}
   <div class="container">
  <div class="row">
    <div class="col">
    <div><h5 className="text-white">ABOUT US</h5></div>
    <p className="text-white">We are passionate about our students advancing their careers through continued education.
       In fact, our Practice Question standard are higher than the average!
        Our motto is “Your Success is Our Success” for a reason:
       we strive to help students write their success stories and pursue their dreams.</p>
   
    </div>
    <div class="col">
    <div><h5 className="text-white">POPULAR PACKAGES</h5></div>
    <div class="list-group">
  <a href="#"  aria-current="true">NEET</a>
  <a href="#" >JEE MAIN</a>
  <a href="#">JEE MAIN 1</a>
  <a href="#" >JEE MAIN 2</a>
</div>
    </div>
    <div class="col">
    <div><h5 className="text-white">QUICK LINKS</h5></div>
    <div class="list-group">
  <a href="#"  aria-current="true">HOME</a>
  <a href="#" >ABOUT US</a>
  <a href="#">FEATURES</a>
  <a href="#" >TEST PACKAGES</a>
  <a href="#" >CONTACT US</a>
</div>
    </div>
    <div class="col">
    <div><h5 className="text-white">CONTACT US</h5></div>
    <p className="text-white"><div>Address : 3rd floor, RK Niwas, Bailey Rd, Rupaspur, Patna, Bihar 801503</div>

<div>Phone: 7349762146</div>
<div>Email: info@apnalifecare.com</div>
<div>Website: exam.apnalifecare.com</div></p>
   
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
    </div>
  );
}
export default App;
