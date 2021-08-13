import React, { Component } from "react";
import "./home.scss";

import { connect } from "react-redux";
import { GetBooks } from "../../actions/getBooks";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    let books = this.props.state.BookReducer.books.map(book => {
      return (
        <div className="bookHolder" key={Math.random() * 1000}>
          <h1>{book.book_title}</h1>
          <p>{book.book_description}</p>
        </div>
      );
    });
    return (
      <React.Fragment>
        <h1>Home component!</h1>
        {books}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => {
      dispatch(GetBooks());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
