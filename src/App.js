import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Dashboard from "./Containers/Dashboard";
import Navbar from "./Layouts/Navbar";
import Search from "./Containers/Search"; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container-mian">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
            <Route path="/users/:login" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
