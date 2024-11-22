import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Intro from './components/Intro/Intro';
import About from './components/about/about';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Reviews from './components/reviewes/Reviews';
import Contact from './components/contaact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <section id="home"><Intro /></section>
        <section id="aboutme"><About /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="testimonials"><Reviews /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </>
  );
}

export default App;
