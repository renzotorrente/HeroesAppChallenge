import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "../src/components/Routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import  'jquery/dist/jquery';
import  'popper.js/dist/popper';
import { Provider } from "react-redux";
import { store } from "./store/store";
import  './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
