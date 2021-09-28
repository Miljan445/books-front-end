import React, { Component } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Navigation />
      </header>
    );
  }
}

export default Header;
