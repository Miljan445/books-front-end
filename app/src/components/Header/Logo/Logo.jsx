import React, { Component } from "react";
import logoIcon from "../../../assets/img/logo.svg";

export class Logo extends Component {
  render() {
    const siteName = "SVET KNJIGA";
    const logoDesc = "book-logo";

    return (
      <div>
        <img src={logoIcon} alt={logoDesc} />
        <h1>{siteName}</h1>
      </div>
    );
  }
}

export default Logo;
