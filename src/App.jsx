import React from 'react'
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Home from './Components/Home';
import AboutMe from './Components/Aboutme';
import Header from './Components/Header';



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <AboutMe/>
    <Section/>
    <Project/>
    <Skill/>
    <Contact/>
    <Header/>
    </>
  );
}
export default App;