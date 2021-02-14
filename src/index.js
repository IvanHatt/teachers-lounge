import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/popper";
import "rsuite/dist/styles/rsuite-default.css";
import "App.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
