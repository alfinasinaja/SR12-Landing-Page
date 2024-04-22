// Header.js

import React, { useState, useEffect } from 'react';
import { BiSun, BiMoon, BiMenu } from 'react-icons/bi';



const Header = ({darkMode}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0 && !isMenuOpen);
        // Close the menu when scrolling starts
        if (isMenuOpen && scrollPosition > 0) {
          setIsMenuOpen(false);
        }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);



  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsScrolled(window.scrollY > 0);
  };
 


  return (
    <header className={`fixed top-0 left-0 w-full ${isScrolled ? 'bg-red-900' : 'bg-transparent'}`} style={{ zIndex: 50 }}>
  <div className="container px-4 mx-auto">

<div className="flex justify-between items-center mt-4 mb-4">
<img className={`w-16 ${isScrolled ? 'grayscale invert' : 'grayscale-0 invert-0'}`} src="/brands/sr12.png" alt="" />

  <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:items-center justify-center space-x-10`}>
    <li className="hidden lg:block"><a href="/" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Home</a></li>
    <li className="hidden lg:block"><a href="/tentang" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Tentang</a></li>
    <li className="hidden lg:block"><a href="/produk" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Produk</a></li>
    <li className="hidden lg:block"><a href="/distribusi" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Distribusi</a></li>
  </div>


      






        <div className="lg:hidden">
          <BiMenu className="text-white text-2xl"/>
        </div>
      </div>
</div>    </header>
  );
};

export default Header;
