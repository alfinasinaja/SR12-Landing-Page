import React, { useState, useEffect } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Home from './pages/Home.jsx';
import Footer from './component/Footer.js';
import Nav from './component/Nav.jsx';
import Products from './pages/Products.jsx';
import DetailProduct from './pages/ProductDetail.jsx';
import Blog from './pages/Blogs.jsx';
import DetailPost from './pages/DetailPost.jsx';
import Distributor from './pages/Distributor.jsx';
import Produksi from './pages/Produksi.jsx';
import NotFoundPage from './404.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      document.body.classList.toggle('dark', newDarkMode);
      document.documentElement.classList.toggle('dark', newDarkMode);
      console.log(`Dark mode toggled: ${newDarkMode ? 'ON' : 'OFF'}`);
      return newDarkMode;
    });
  };

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setDarkMode(savedDarkMode);
    document.body.classList.toggle('dark', savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);

  return (
    <Router>
      <div>
      <div className="fixed bottom-4 right-4 p-4" style={{ zIndex: 300 }}>
          <div
            className={`${darkMode ? 'bg-white' : 'bg-red-900'}`}
            style={{
              borderRadius: '50%',
              padding: '0.5rem',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transform: `rotate(${darkMode ? '360deg' : '0deg'})`,
              transition: 'transform 0.3s ease-in-out',
            }}
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <BiMoon className="text-gray-900 text-4xl" />
            ) : (
              <BiSun className="text-white text-4xl" />
            )}
          </div>
        </div>
        
        <Nav darkMode={darkMode} />
      <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/products" element={<Products darkMode={darkMode} />} />
      <Route path="/product/:slug" element={<DetailProduct darkMode={darkMode} />} />
      <Route path="/news" element={<Blog darkMode={darkMode} />} />
      <Route path="/news/:slug" element={<DetailPost  darkMode={darkMode} />} />
      <Route path="/distributor" element={<Distributor darkMode={darkMode} />} />
      <Route path="/produksi" element={<Produksi darkMode={darkMode} />} />
      <Route path="/about" element={<About darkMode={darkMode} />} />
      
      <Route path="/login" element={<Login darkMode={darkMode} />} />



      {/* Rute "Not Found" */}
      <Route path="*" element={<NotFoundPage darkMode={darkMode} />} />
    </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;
