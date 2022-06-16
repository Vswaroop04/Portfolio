import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutMe from "./Aboutme";

function Routerapp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routerapp;
