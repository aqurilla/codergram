import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className="fab fa-connectdevelop"></i> Codergram
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="#!">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
