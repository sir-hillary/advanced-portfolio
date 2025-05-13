import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer className='bg-gray-100 dark:bg-gray-900 py-8'>
            <div className='w-[90%] max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>

                {/* Left: Logo and Name */}
                <div className='flex items-center gap-3'>
                    <Link to='home' smooth={true} duration={500}><img className='w-12 object-cover' src={logo} alt="" /></Link>
                    <span className='text-xl font-bold text-yellow-400'>Hillary</span>
                </div>

                {/* Center: quick Links */}

                <div className='flex gap-6 text-gray-700 dark:text-gray-300 text-sms'>
                    <Link to='home' smooth={true} duration={500} className='hover:text-yellow-400 transition'>Home</Link>
                    <Link to='intro' smooth={true} duration={500} className='hover:text-yellow-400 transition'>About</Link>
                    <Link to='portfolio' smooth={true} duration={500} className='hover:text-yellow-400 transition'>Portfolio</Link>
                    <Link to='skills' smooth={true} duration={500} className='hover:text-yellow-400 transition'>My skills</Link>
                </div>

                {/* Right: Copyright */}

                <div className='text-gray-600 dark:text-gray-400 text-sm text-center md:text-right'>
                    &copy; {new Date().getFullYear()} Hillary. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
