// Header.js

import React, { useState, useEffect } from 'react';
import { BiSun, BiMoon, BiMenu } from 'react-icons/bi';

const DropdownMenu = ({ closeMenu }) => {
  return (
    <ul className="lg:hidden absolute top-16 right-4 bg-red-900 p-4 space-y-2">
      <li><a href="/" className="text-white text-lg" onClick={closeMenu}>Home</a></li>
      <li><a href="/tentang" className="text-white text-lg" onClick={closeMenu}>Tentang</a></li>
      <li><a href="/produk" className="text-white text-lg" onClick={closeMenu}>Produk</a></li>
      <li><a href="/distribusi" className="text-white text-lg" onClick={closeMenu}>Distribusi</a></li>
    </ul>
  );
};

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
    document.documentElement.classList.toggle('dark');
  };

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsScrolled(window.scrollY > 0);
  };

  

  return (
    <header className={`fixed top-0 left-0 w-full p-4 ${isScrolled ? 'bg-red-900' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">SR12 Herbal Skin Care</h1>

        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:items-center justify-center space-x-10`}>
          <li className="hidden lg:block"><a href="/" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Home</a></li>
          <li className="hidden lg:block"><a href="/tentang" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Tentang</a></li>
          <li className="hidden lg:block"><a href="/produk" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Produk</a></li>
          <li className="hidden lg:block"><a href="/distribusi" className={`hover:underline text-white text-2xl`} onClick={closeMenu}>Distribusi</a></li>
        </div>

        <div className="fixed bottom-4 right-4 p-4">
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






        <div className="lg:hidden">
          <BiMenu className="text-white text-2xl" onClick={handleBurgerClick} />
          {isMenuOpen && <DropdownMenu closeMenu={closeMenu} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
