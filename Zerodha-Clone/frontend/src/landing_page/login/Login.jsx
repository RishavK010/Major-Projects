import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    window.location.href = 'http://localhost:5174/';
  }, []);

  return <h1>Wait, redirecting to Signup...</h1>
};

export default Login;