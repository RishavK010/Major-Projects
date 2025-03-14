import React, { useEffect, useState } from "react";
import "./Login.css";

function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://zerodhadashboard.vercel.app/";
    }, 2000); 
  }, []);

  return (
    <div className="login-container">
      {loading && (
        <div className="loading-box">
          <div className="spinner"></div>
          <h1>Redirecting to Dashboard...</h1>
        </div>
      )}
    </div>
  );
}

export default Login;