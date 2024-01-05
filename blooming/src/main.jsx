import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { AuthContextProvider } from "./context/authContext.jsx";
import { ValueProvider } from "./context/googleAuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ValueProvider>
        <App />
      </ValueProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
