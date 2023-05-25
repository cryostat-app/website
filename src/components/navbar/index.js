import './index.scss';
import React from "react";
import { ReactComponent as Logo } from "../../static/logoWithText.svg";

function Navbar () {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <a href='/'>About</a>
        <a href='/'>Pricing</a>
        <a href='/'>Self-Hosted</a>
        <a href='https://github.com/cryostat-app'>Github</a>
        <a href='/'>Feedback</a>
      </div>
      <div className="actions">
        <a href='/'>Login</a>
        <a href='/'>Sign up</a>
      </div>
    </div>
  );
}

export default Navbar;
