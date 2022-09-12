import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//Before use react-router-dom I installed react-router-dom
//to install react-router-dom open terminal and type: npm install react-router-dom it will installed the router to package.json
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
