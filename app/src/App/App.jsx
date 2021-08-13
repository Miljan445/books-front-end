import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Home from "../view/Home";
import Login from "../view/Login";
import Register from "../view/Register";
import BookOrder from "../view/BookOrder";
import AddBook from "../view/AddBook";
import NotFound from "../view/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/book-order" component={BookOrder} />
            <Route exact path="/add-book" component={AddBook} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
