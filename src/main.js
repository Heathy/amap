/* eslint-disable no-unused-vars */
import React from "react"
import  { createRoot } from "react-dom/client"
import App from "./App.js"
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<React.StrictMode>
    <App />
  </React.StrictMode>);

createRoot.render(<App/>, document.getElementById("APP"))