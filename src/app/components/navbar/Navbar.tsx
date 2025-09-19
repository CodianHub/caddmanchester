import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.jpg'
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/Courses' },
  { name: 'Exam', path: '/Exams' },
  { name: 'Blog', path: '/Blog' },
  { name: 'About Us', path: '/About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <nav className="bg-gradient-to-r from-blue-950/90 via-blue-800/80 to-blue-700/80 text-white px-8 py-4 rounded-full shadow-xl flex items-center justify-between transition-all duration-300 h-[80px] ">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="CADD Manchester Logo"
            width={60}
            height={60}
            priority
            className="hover:scale-105 transition duration-300"
          />
          <p className=" flex flex-col text-[20px] font-bold">
            <p className='relative top-1'>CADD<br/><p className='relative bottom-3'>MANCHESTER</p></p>
            <p className="relative bottom-3 text-[10px]">An Institute of English & Computer Courses</p>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 text-lg font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition duration-300 hover:text-black ${
                pathname === item.path ? 'text-black underline underline-offset-4' : ''
              }`}
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="focus:outline-none text-white"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-black mt-2 rounded-xl shadow-xl transition-all duration-500 animate-fadeInDown">
          <ul className="flex flex-col py-4 px-6 space-y-4 font-semibold">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`block hover:text-blue-600 transition duration-200 ${
                    pathname === item.path ? 'text-blue-600 font-bold underline' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
