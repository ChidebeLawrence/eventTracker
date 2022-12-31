import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./vestir.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import storeSlice from "./components/Store";
import { combineReducers } from 'redux';

const store = configureStore({
  reducer: {
    item: storeSlice
  }
});

const selectedBrand = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_BRAND':
      return action.brand;
    default:
      return state;
  }
};

const products = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.products;
    default:
      return state;
  }
};

export default combineReducers({
  selectedBrand,
  products,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
