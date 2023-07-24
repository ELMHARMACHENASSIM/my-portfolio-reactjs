import React from "react";
import { Route, Routes } from "react-router-dom";
import  Error  from "./Error";
import  Home  from "./pages/home/Home";
import  About  from "./pages/about/About";
import  Header  from "./layouts/Header";
import  Skills  from "./pages/skills/Skills";
import  Contact  from "./pages/contact/Contact";
import  Works  from "./pages/works/Works";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
};
