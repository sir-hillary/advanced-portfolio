import React from 'react'
import profile from "../assets/image.jpg"
import { Link } from 'react-scroll'
import hireme from "../assets/hireme.png"

const Introduction = () => {
    return (
        <section id='intro' className='py-4 md:py-6 relative'>
            <div className='w-[90%] max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10'>
                <div className=' max-w-full text-left space-y-4 leading-relaxed text-gray-700 dark:text-gray-100' data-aos="fade-left">
                    <span className='text-xl md:text-2xl '>Hello,</span>
                    <h1 className='text-2xl md:text-4xl font-bold'>I'm <span className='text-yellow-400'>Hillary <br /></span>Front-End Website Developer</h1>
                    <p className='text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300'>Hello! I'm a passionate front-end developer from Nairobi, Kenya 🇰🇪. I specialize in building responsive websites and modern UIs using React and Tailwind CSS. I'm self-taught and always learning something new!</p>
                    <p className='text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                    When I'm not coding, I'm probably exploring design ideas on Figma, helping students with math, or improving my typing speed!
                    </p>
                    <Link to='contact' smooth={true} duration={500}><button className='flex max-w-full gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-lg text-gray-900 mt-4 hover:bg-yellow-400'><img className='object-cover w-5' src={hireme} alt="" /> Hire Me</button></Link>
                </div>
                <div className='flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg '  data-aos="fade-right">
                    <img src={profile} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Introduction
