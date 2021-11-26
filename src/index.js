import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsContext from "./context/ProductsContext";

ReactDOM.render(
  <ProductsContext>
    <App />
  </ProductsContext>,
  document.getElementById("root")
);
