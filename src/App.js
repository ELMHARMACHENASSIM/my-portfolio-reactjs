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
        <Route path="/my-portfolio-reactjs*" element={<Error />} />
        <Route path="/my-portfolio-reactjs/" element={<Home />} />
        <Route path="/my-portfolio-reactjs/about" element={<About />} />
        <Route path="/my-portfolio-reactjs/skills" element={<Skills />} />
        <Route path="/my-portfolio-reactjs/works" element={<Works />} />
        <Route path="/my-portfolio-reactjs/contact-me" element={<Contact />} />
      </Routes>
    </>
  );
};
