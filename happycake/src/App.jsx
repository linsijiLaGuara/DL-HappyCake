// App.jsx (o tu archivo principal)
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footers from "./components/Footers";
import { Home } from "./views/Home";
import { Contact } from "./views/Contact"

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footers />
    </>
  );
};

export default App;
