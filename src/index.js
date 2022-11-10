import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UserState from "./context/UserState";
import SignInState from "./context/SignInState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SignInState>
      <BrowserRouter>
        <UserState>
          <App />
        </UserState>
      </BrowserRouter>
    </SignInState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
