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
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </>
  );
};
