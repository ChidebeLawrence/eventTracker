import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./music.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./components/Store";

const store = configureStore({
  reducer: {
    song: storeSlice
  }
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
