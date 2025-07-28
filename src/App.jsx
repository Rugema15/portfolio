import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
     
      </Router>

    </div>
  );
}

export default App;
