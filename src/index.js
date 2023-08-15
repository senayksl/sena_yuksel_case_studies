import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/header";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
      <div style={{backgroundColor:"#f9f9f9"}}>
      <div className="w-100"></div>
      <div className="col">
      <App/>
      </div>
      </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
