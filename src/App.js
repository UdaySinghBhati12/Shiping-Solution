
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Features from './components/Features';
import Content from './components/Content';
import Contact from './components/Contact';
import Service from './components/Service';


const App = () => {
  return (
    <div> 

      <Header/>  
      <Hero/>
      <Features/>
      <Service/>
      <Content/>
      <Contact/> 
      <Footer/>
    
    </div>
  )
}

export default App;



