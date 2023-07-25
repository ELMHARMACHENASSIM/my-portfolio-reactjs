import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./layouts/Header";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Works from "./pages/works/Works";
import Resume from "./pages/resume/Resume";
import Services from "./pages/services/Services";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      <About />
      <Resume />
      <Skills />
      <Services />
      <Works />
      <Contact />
=======
        <Route path="/my-portfolio-reactjs*" element={<Error />} />
        <Route path="/my-portfolio-reactjs/" element={<Home />} />
        <Route path="/my-portfolio-reactjs/about" element={<About />} />
        <Route path="/my-portfolio-reactjs/skills" element={<Skills />} />
        <Route path="/my-portfolio-reactjs/works" element={<Works />} />
        <Route path="/my-portfolio-reactjs/contact-me" element={<Contact />} />
      </Routes>
>>>>>>> gh-pages
    </>
  );
};
