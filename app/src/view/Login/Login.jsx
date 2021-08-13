import React, { Component } from "react";
import "./login.scss";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorMsg: "",
      isPasswordShown: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisible = this.togglePasswordVisible.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { username, password } = this.state;
    const userCredentials = { username, password };
    event.preventDefault();
    fetch("http://127.0.0.1:5000/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userCredentials), // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => {
        const { logInAuthenticated, message } = data;
        if (logInAuthenticated) {
          this.props.history.push("/");
        } else {
          this.setState({ errorMsg: message });
        }
      });
  }

  togglePasswordVisible(event) {
    event.preventDefault();
    this.setState(prevState => ({
      isPasswordShown: !prevState.isPasswordShown,
    }));
  }

  render() {
    return (
      <div>
        <h1>Log in page</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          {this.state.errorMsg && (
            <div className="error-box">
              <p>{this.state.errorMsg}</p>
            </div>
          )}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              maxLength="40"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-group">
              <input
                type={this.state.isPasswordShown ? "text" : "password"}
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                maxLength="40"
                required
              />
              <button onClick={this.togglePasswordVisible}>
                {this.state.isPasswordShown ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LogIn;
