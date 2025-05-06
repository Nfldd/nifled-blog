import React from 'react';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <>
    <Hero />
    <Navbar />
    <main>
      <div className="container">
        <Home />
        <About />
        <Contact />
      </div>
    </main>
    <Footer />
  </>
);

export default App;