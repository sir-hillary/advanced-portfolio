import React, { useState } from 'react'
import portfolio_1 from '../assets/portfolio-1.png'
import portfolio_2 from '../assets/portfolio-2.png'
import portfolio_3 from '../assets/portfolio-3.png'
import portfolio_4 from '../assets/auth-app.PNG'
import { motion } from 'framer-motion'



const projects = [
    {
        id: 1,
        image: portfolio_1,
        title: "Task-manager",
        description: "Manage your daily tasks using React and Tailwind CSS.",
        link: "https://sir-hillary.github.io/task-manager/"
    },
    {
        id: 2,
        image: portfolio_2,
        title: "Expense-Tracker app",
        description: "Track Expenses easily using UI and localstorage.",
        link: "https://sir-hillary.github.io/expense-tracker/"
    },
    {
        id: 3,
        image: portfolio_3,
        title: "My Portfolio Website",
        description: "You are on it! Built with React, Tailwind CSS and more.",
        link: "https://sir-hillary.github.io/advanced-portfolio/",
    },
    {
        id: 4,
        image: portfolio_4,
        title: "Authentication app",
        description: "This is an authentication app that allows a user to perform the login an signup functionality in a website app. It is made mainly from the javascript language with tailwind css styling. I am currently learning backend development and so i have build this frontend to link with my backend to enable storage of users information in a database.",
        link: "https://sir-hillary.github.io/auth-app/"
        
    }
]

const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);


    return (
        <motion.section id='portfolio' className='py-16 bg-gray-100 dark:bg-gray-900'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <motion.h2
                    className='text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                >My Projects</motion.h2>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        projects.map((project) => (
                            <motion.div
                                key={project.id}
                                onClick={() => openModal(project)}
                                className='rounded-2xl shadow-md cursor-pointer p-5 bg-white dark:bg-slate-800 hover:shadow-xl transition duration-300'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-t-2xl' />
                                <div className='p-4 space-y-2'>
                                    <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{project.title}</h3>
                                    <p className='text-gray-600 dark:text-gray-300 text-sm'>{project.description}</p>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-block mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline'
                                        >View Project</a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>

            {/*this is the modal */}

            {selectedProject && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm '>
                    <motion.div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg max-w-md w-[90%] p-6 relative mx-4'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className='absolute top-2 right-3 text-gray-500 hover:text-red-500'
                        >
                            &times;
                        </button>

                        {/* Modal Content */}

                        <img src={selectedProject.image} alt={selectedProject.title}
                            className='w-full h-48 object-cover rounded-lg mb-4'
                        />

                        <h3 className='text-xl font-bold mb-2'>{selectedProject.title}</h3>
                        <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-4'>{selectedProject.description}</p>
                        {selectedProject.link && (
                            <a href={selectedProject.link} target='_blank' rel='noopener noreferrer' className='inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Visit Website</a>
                        )}

                    </motion.div>
                </div>
            )}
        </motion.section>
    )
}

export default Portfolio
