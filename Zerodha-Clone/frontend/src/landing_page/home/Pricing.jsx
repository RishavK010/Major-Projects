import React from "react";

export default function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5">
          <h1 className="fs-2 text-primary mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-bold text-primary">
            See Pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-6">
          <div className="row text-center">
            <div className="col p-4 border shadow rounded">
              <h1 className="mb-3 text-success">₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-4 border shadow rounded">
              <h1 className="mb-3 text-danger">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}