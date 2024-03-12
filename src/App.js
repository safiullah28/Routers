import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home.js";
import About from "./components/about.js";
import Error from "./components/error.js";
import Contact from "./components/contact.js";
import { Routes, Route } from "react-router-dom";

//import {createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
