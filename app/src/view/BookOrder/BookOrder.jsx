import React, { Component } from "react";
import "./bookOrder.scss";

class BookOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    let data = {
      book_id: 7,
      quantity: 1,
      adress: "Adresa neka",
      name: "Petar",
      surrname: "Petrovic",
      ordered_from: 1,
      phone_number: "06000000",
    };
    fetch("http://127.0.0.1:5000/orderBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  }
  render() {
    return (
      <div>
        <h1>Book orderd page</h1>
      </div>
    );
  }
}

export default BookOrder;
