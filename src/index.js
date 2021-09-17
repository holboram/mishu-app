import React from "react";
import ReactDOM from "react-dom";

// import "../node_modules/normalize.css/normalize.scss";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename="/mishu-app">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
