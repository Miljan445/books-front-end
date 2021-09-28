import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { uid } from "react-uid";
import { toKebabCase } from "../../../utils/converts";

class Navigation extends Component {
  static propTypes = {
    menuLinks: PropTypes.arrayOf(PropTypes.string),
  };

  renderMenuLinks() {
    // TODO: Dodaj sve linkove i povuci iz redux-a dal je user logovan i onda prema tome generisi razlicite linkove za razlicite usere
    

    const menuLinks = [
      {
        text: "Prijavi se",
        path: "./login",
      },
      {
        text: "Registruj se",
        path: "./register",
      },
    ];

    return menuLinks.map(link => {
      return (
        <Link key={uid(toKebabCase(link.text))} to={link.path}>
          {link.text}
        </Link>
      );
    });
  }
  // TODO: Dodaj hamburger meni na < 500px
  render() {
    return <nav>{this.renderMenuLinks()}</nav>;
  }
}

export default Navigation;
