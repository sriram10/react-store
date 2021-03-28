import React from "react";
import {
    Link
  } from "react-router-dom";
  function Header() {
  return (

<div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Product Website
          </Link>
      <div>
        <ul class="navbar-nav ml-auto">
          <li class='nav-item'><Link class="nav-link" to="/">Home</Link></li>
          <li class='nav-item'><Link class="nav-link" to="/about">About</Link></li>
          <li class='nav-item'><Link class="nav-link" to="/faq">FAQ</Link></li>
          <li class='nav-item'><Link class="nav-link" to="/products">Products</Link></li>
          <li class='nav-item'><Link class="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
      </div>
      </nav>
      </div>

);
}

export default Header;     