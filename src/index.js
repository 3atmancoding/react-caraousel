import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./store";
import Home from "./containers/Home";
ReactDOM.render(
  // <Provider store={store}>
  //   <Home />
  // </Provider>,
  <>
    <Home />
  </>,
  document.getElementById("root")
);
