import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Coders Unite!</h1>
          <p className="lead">
            Create portfolios, connect and interact with other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
            <Link to="/login" className="btn btn-signin">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
