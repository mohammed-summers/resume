import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Hero />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<ProjectList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router> */}

      <Navbar />
      <Hero />
      <About />
      <ProjectList />
      <Contact />
    </>
  );
}

export default App;
