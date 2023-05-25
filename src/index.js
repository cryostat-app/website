import './index.scss'
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById("root")
);
