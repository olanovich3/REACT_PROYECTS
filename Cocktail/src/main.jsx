import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cocktailfinder from "./Components/Cocktailfinder";
import Cocktail from "./Components/Cocktail";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Cocktailfinder />} />
          <Route path="/cocktailfinder/:id/:number" element={<Cocktail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
