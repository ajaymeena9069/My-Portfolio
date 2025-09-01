import React from 'react'
import "./App.css"
import Home from './component/ui/Home';
import { Header } from './component/layout/Header'
import About from './component/ui/About';
import Projects from './component/ui/Projects';
import Skills from './component/ui/Skills';
import Contact from './component/ui/Contact';
import Footer from './component/layout/Footer';
export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
