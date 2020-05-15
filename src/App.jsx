import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./screen/Home/Home";
import Navbar from "./component/navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Navbar>
      </>
    );
  }
}

export default App;
