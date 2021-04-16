import React from 'react';
import Navbar from './components/NavBar'
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <main className="bg-gray-900 text-white overflow-y-auto h-screen">
     <Navbar /> <br />
     <About />
     <Skills />
     <Footer />
      </main>
  );
}

export default App;
