import React, { useState } from 'react'
import logo from '../assets/logo.png';
import contact from '../assets/contact.png'
import { Link } from 'react-scroll';
import { RiSunFill } from "react-icons/ri";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ darkMode, setDarkMode }) => {

    const [openNav, setOpenNav] = useState(false);

    const handleNavToggle = () => {
        setOpenNav(!openNav);
    };

    return (
        <nav id='home' className='flex justify-between items-center h-20 w-[90%] mx-auto'>

            {/* logo */}
            <Link to='home' smooth={true} duration={500} className='cursor-pointer'><img src={logo} alt="logo" className={`w-12 max-w-full ${ darkMode ? "": "bg-gray-900"}` }/></Link>

            {/* Desktop Links */}
            <div className='hidden md:flex gap-6 items-center justify-center'>
                <Link to='#' smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 hover:pb-1 hover:border-b-2 hover:border-solid hover:border-yellow-400'>Home</Link>
                <Link to='intro' smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 hover:pb-1 hover:border-b-2 hover:border-solid hover:border-yellow-400'>About Me</Link>
                <Link to='portfolio' smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 hover:pb-1 hover:border-b-2 hover:border-solid hover:border-yellow-400'>Portfolio</Link>
                <Link to='skills' smooth={true} duration={500} className='cursor-pointer hover:text-yellow-400 hover:pb-1 hover:border-b-2 hover:border-solid hover:border-yellow-400'>Skills</Link>
            </div>

            {/* Desktop Buttons */}

            <div className='hidden md:flex  items-center justify-center gap-3'>

                <Link to='contact' smooth={true} duration={500}><button className='px-4 py-2 max-w-full bg-white shadow-lg flex justify-center items-center gap-2 rounded-full text-gray-900 hover:bg-yellow-400'><img src={contact} className='w-6 max-w-full object-cover' alt="contact" />Contact Me</button></Link>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className='max-w-full'
                >{darkMode ? <RiSunFill className='text-lg text-yellow-400' /> : <FaMoon className='text-lg text-gray-900' />}</button>
            </div>


            {/* Hamburger Menu Icon */}

            <div className='md:hidden flex items-center'>
                <button onClick={handleNavToggle} className='text-2xl'>
                    {openNav ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Desktop Menu */}

            {
                openNav && (
                    <div className='absolute top-20 left-0 w-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-6 gap-6 z-10'>
                        <Link onClick={handleNavToggle} to="home" smooth={true} duration={500} className="cursor-pointer text-lg hover:text-yellow-400">
                            Home
                        </Link>
                        <Link onClick={handleNavToggle} to="intro" smooth={true} duration={500} className="cursor-pointer text-lg hover:text-yellow-400">
                            About Me
                        </Link>
                        <Link onClick={handleNavToggle} to="portfolio" smooth={true} duration={500} className="cursor-pointer text-lg hover:text-yellow-400">
                            Portfolio
                        </Link>
                        <Link onClick={handleNavToggle} to="skills" smooth={true} duration={500} className="cursor-pointer text-lg hover:text-yellow-400">
                            My Skills
                        </Link>
                        <Link onClick={handleNavToggle} to="contact" smooth={true} duration={500}>
                            <button className="mt-4 px-6 py-2 bg-white shadow-lg rounded-full text-gray-900 hover:bg-yellow-400">
                                Contact Me
                            </button>
                        </Link>
                        <button onClick={() => { setDarkMode(!darkMode); handleNavToggle(); }} className="text-2xl mt-4">
                            {darkMode ? <RiSunFill className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
                        </button>
                    </div>
                )
            }
        </nav>

    )
}

export default Navbar
