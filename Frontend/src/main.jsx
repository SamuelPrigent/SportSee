// react
import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/main.css";
// components
import Header from "./components/Header.jsx";
// router
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// utils
import ScrollToTop from "./utils/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>
);
