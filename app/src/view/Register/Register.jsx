import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // let data2 = {
    //     username: "miljan2c5",
    //     password: "miljan",
    //     email:"dragan@dragan.com"
    //   };
    //   fetch("http://127.0.0.1:5000/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     credentials: "include",
    //     body: JSON.stringify(data2), // body data type must match "Content-Type" header
    //   });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
      </div>
    );
  }
}

export default Register;
