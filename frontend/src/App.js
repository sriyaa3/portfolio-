import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <main className="min-h-screen">
              <Hero />
              <Skills />
              <Projects />
              <Experience />
              <Leadership />
              <Contact />
              <Footer />
            </main>
          } />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;