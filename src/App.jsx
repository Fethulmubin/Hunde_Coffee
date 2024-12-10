import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/About/AboutPage";
import Coffee from "./Components/Coffee/Coffee";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/coffee/:name" element={<Coffee/>}/>
      </Routes>
    </>
  );
}

export default App;
