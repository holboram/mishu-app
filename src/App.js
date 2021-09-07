import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

import Servicii from "./components/pages/Servicii";
import Acasa from "./components/pages/Acasa";

const App = () => {
  return (
    <div className="background-container">
      <Navbar />

      <Switch>
        <Route path="/mishu-app" exact component={Acasa} />
        <Route path="/" exact component={Acasa} />
        <Route path="/servicii" exact component={Servicii} />
      </Switch>
    </div>
  );
};

export default App;
