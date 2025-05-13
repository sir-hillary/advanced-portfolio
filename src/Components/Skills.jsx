import React from 'react'
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import Aos from 'aos';


const skills = [
    {
        id: 1,
        name: 'HTML5',
        icon: <FaHtml5 className='text-orange-500 text-4xl' />,
        level: 95
    },
    {
        id: 2,
        name: 'CSS3',
        icon: <FaCss3 className='text-blue-500 text-4xl' />,
        level: 90
    },
    {
        id: 3,
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className='text-cyan-400 text-4xl' />,
        level: 90
    },
    {
        id: 4,
        name: 'Javascript',
        icon: <SiJavascript className='text-yellow-400 text-4xl' />,
        level: 90
    },
    {
        id: 5,
        name: 'React',
        icon: <FaReact className='text-blue-400 text-4xl' />,
        level: 90
    },
    {
        id: 6,
        name: 'Figma',
        icon: <FaFigma className='text-pink-500 text-4xl' />,
        level: 80
    },
    {
        id: 7,
        name: 'WordPress',
        icon: <FaWordpress className='text-blue-600 text-4xl' />,
        level: 100
    },
]

const Skills = () => {
    return (
        <section id='skills' className='py-12 md:py-20'>
            <div className='w-[90%] max-w-screen-xl mx-auto text-center'>
                <h2 className='text-2xl md:text-4xl font-bold mb-10'>My Skill Set</h2>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    skills.map((skill)=>(
                        <div
                        key={skill.id}
                        className='flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300'
                        data-aos="zoom-in"
                        >
                            {skill.icon}
                            <h3 className='mt-4 text-lg font-semibold text-grary-800 dark:text-gray-100 '>{skill.name}</h3>

                            {/*this is progress bar */}

                            <div className='w-full mt -4'>
                                <div className='h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden'>
                                    <div
                                    className='h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-b-full'
                                    style={{
                                        width: `${skill.level}%`,
                                        transition: 'width 1s ease-in-out',
                                    }}
                                    >
                                    </div>
                                </div>
                                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>{skill.level}%</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
