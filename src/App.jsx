import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Certificates from "./pages/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="lg:px-40">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
