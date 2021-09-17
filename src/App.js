import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./containers/Navbar";

import Service from "./containers/pages/Service";
import Home from "./containers/pages/Home";

const App = () => {
  return (
    <Fragment>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Service} />
      </Switch>
    </Fragment>
  );
};

export default App;
