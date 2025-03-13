import React from "react";

export default function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src="imgs/largestBroker.svg" className="img-fluid" alt="Largest Broker" />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">Largest stock broker in India</h1>
          <p className="text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="imgs/pressLogos.png" className="img-fluid mt-3" alt="Press Logos" />
        </div>
      </div>
    </div>
  );
}