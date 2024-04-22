import React, { useState, useEffect } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Nav = ({ darkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let Links = [
      { name: "HOME", link: "/" },
      { name: "PRODUK", link: "/products" },
      { name: "TENTANG", link: "/about" },
      {
        name: "DISTRIBUSI",
        link: "#",
        dropdownItems: [
          { name: "Produksi", link: "/produksi" },
          { name: "Distribusi", link: "/distributor" },
        ],
      },
      { name: "NEWS", link: "/news" },
    ];


    const [dropOpen, setDropOpen] = useState(false);

    const toggleDropdown = () => {
      setDropOpen(!dropOpen);
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
      });
    let [open,setOpen]=useState(false);
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/produksi' || window.location.pathname === '/about';

  return (
    <div className='w-full fixed top-0 left-0' style={{ zIndex: 50, width: '100vw', height: '80px' }}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className={`md:flex items-center justify-between py-4 md:px-10 px-7 ${isScrolled ? 'bg-red-900' : isHomePage ? 'bg-transparent' : 'bg-red-900'}`}>
      <div className='flex items-center font-bold text-2xl cursor-pointer font-[Poppins] text-white'>
        <span className='text-3xl mr-1 pt-2'></span>
        {/* Use Link component instead of <a> */}
        <Link to='/'>
          <img className={`w-14 grayscale invert`} src="/brands/sr12.png" alt="" />
        </Link>
      </div>

      <div onClick={() => setOpen(!open)} className='text-white text-3xl top-4 absolute right-8 top-0 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'bg-red-900 bg-opacity-40 top-20 rounded-lg' : 'top-[-490px]'}`}>
        {Links.map((link) => (
          <li key={link.name} className='whitespace-nowrap md:ml-8 text-xl md:my-0 my-7'>
            {link.dropdownItems ? (
              <div className='relative' onClick={toggleDropdown}>
                {/* Use Link component instead of <a> */}
                <Link to={link.link} className='flex items-center text-white hover:text-gray-200 duration-500'>
                  <span>{link.name}</span>
                  {dropOpen ? <FaAngleUp className='ml-1' /> : <FaAngleDown className='ml-1' />}
                </Link>

                {dropOpen && (
                  <ul className={`${
                    open ? 'bg-red-800 bg-opacity-40' : 'absolute'
                  } whitespace-nowrap shadow-lg p-2 top-full left-0 bg-red-800 rounded-lg mt-2`}>
                    {link.dropdownItems.map((item) => (
                      <li key={item.name} className='text-white px-4 py-2 hover:text-gray-200 duration-500'>
                        {/* Use Link component instead of <a> */}
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              // Use Link component instead of <a>
              <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>
                {link.name}
              </Link>
            )}
          </li>
        ))}
        {/* The following button is not wrapped in a Link component. Please adjust as needed. */}
        <Button>Sign In</Button>
      </ul>
    </div>
  </div>
  )
}




const Button = (props) => {
    return (
      <button className='bg-white text-black font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-gray-300 
      duration-500'>
        {props.children}
      </button>
    )
  }

export default Nav