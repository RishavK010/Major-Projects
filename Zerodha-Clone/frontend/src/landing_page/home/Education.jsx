import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src="imgs/education.svg" className="img-fluid" alt="Education" />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3 fs-2 text-primary">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none fw-bold text-primary">
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none fw-bold text-primary">
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;