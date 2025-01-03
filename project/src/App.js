import React from 'react';
import './App.css'
import Navbar from './Navbar.js'
import Section from './Section.js'
import Container from './Container.js'
import Hero from './Hero.js';
import Locate from './Locate.js';
import Footer from './Footer.js';

export default function App() {
  const images = [
    `${process.env.PUBLIC_URL}/images/shinestar.jpg`,
    `${process.env.PUBLIC_URL}/images/shipping.jpg`,
    `${process.env.PUBLIC_URL}/images/sw.jpg`,
    `${process.env.PUBLIC_URL}/images/shipping.jpg`,
    `${process.env.PUBLIC_URL}/images/shinestar.jpg`,
    `${process.env.PUBLIC_URL}/images/shinestar.jpg`,
  ];
  return (
    <div>
      <Navbar />
      <Section />
      <Container />
      <Hero 
      images={images} 
      alt="shinestar"/>
      <Locate />
      <Footer />
    </div>
  )
};