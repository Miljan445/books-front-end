import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.scss";

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
  };

  render() {
    return (
      <button
        className={`btn ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
