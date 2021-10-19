import React from 'react';

export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Popular Courses</h2>
              <h3 className="text-primary">◆◆</h3>
              <h3 className="section-subheading text-muted">Choose your course and get started.</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ title, price }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4 className="border-bottom gap-3">{ title }</h4>
                            <span className="border-end">
                            <h6>Unlimited</h6>
                            <h6>Validity</h6>
                            </span>
                            <div>
                              <button className="btn btn-light">₹{ price }</button>
                              <button className="btn btn-light">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}