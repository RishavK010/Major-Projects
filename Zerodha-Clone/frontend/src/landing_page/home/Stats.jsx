import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="fs-2 text-primary mb-4">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, or annoying push notifications. High-quality apps that 
            you use at your pace.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Our investments in 30+ fintech startups offer you tailored services 
            specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we actively help you 
            do better with your money.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img src="imgs/ecosystem.png" className="img-fluid mb-4" alt="Ecosystem" />
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-decoration-none text-primary fw-bold">
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none text-primary fw-bold">
              Try Kite demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;