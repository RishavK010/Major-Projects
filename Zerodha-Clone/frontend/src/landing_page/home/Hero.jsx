import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5">
      <img src="imgs/homeHero.png" alt="Hero" className="img-fluid mb-4" />
      <h1 className="fw-bold">Invest in everything</h1>
      <p className="text-muted">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
      <button className="btn btn-primary fs-5 px-4 py-2 mt-3" onClick={() => navigate('/login')}>
        Login Now
      </button>
    </div>
  );
}