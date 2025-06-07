import React, { useState } from 'react'
import portfolio_1 from '../assets/portfolio-1.png'
import portfolio_2 from '../assets/portfolio-2.png'
import portfolio_3 from '../assets/portfolio-3.png'
import portfolio_4 from '../assets/portfolio-4.png'


const projects = [
    {
        id: 1,
        image: portfolio_1,
        title: "Task-manager",
        description: "This is a task manager made from react and tailwind css which accepts user input and stores it into nice cards.",
        link: "https://sir-hillary.github.io/task-manager/"
    },
    {
        id: 2,
        image: portfolio_2,
        title: "Expense-Tracker app",
        description: "A responsive simple todolist app that captures the todos of the user.",
        link: "https://sir-hillary.github.io/expense-tracker/"
    },
    {
        id: 3,
        image: portfolio_3,
        title: "My Portfolio Website",
        description: "This website you are using right now was built using the HTML, tailwind CSS and react.",
        link: "https://sir-hillary.github.io/advanced-portfolio/",
    },
    {
        id: 4,
        image: portfolio_4,
        title: "Movie Search App",
        description: "This is an ongoing project right now and is yet to be released but expect a great user interaction movie search app."
    }
]

const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);


    return (
        <section id='portfolio' className='py-12 md:py-20'>
            <div className='w-[90%] max-w-screen-xl mx-auto'>
                <h2 className='text-2xl md:text-4xl font-bold text-center mb-10' data-aos="fade-up">My Portfolio</h2>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => openModal(project)}
                                className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700'
                                data-aos="zoom-in"
                            >
                                <img src={project.image} alt="" className='w-full h-48 object-cover' />
                                <div className='p-5 space-y-2'>
                                    <h2 className='text-xl font-semibold'>{project.title}</h2>
                                    <p className='text-gray-700 dark:text-gray-300 text-sm'>{project.description}</p>
                                    <div className='mt-6 text-center px-5 py-2 bg-blue-500 rounded-lg text-white'>
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            rel='noopener norefferer'
                                        >View Project</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/*this is the modal */}

            {selectedProject && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm '>
                    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg max-w-md w-full p-6 relative mx-4'>

                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className='absolute top-1 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold'
                        >
                            &times;
                        </button>

                        {/* Modal Content */}

                        <img src={selectedProject.image} alt={selectedProject.title}
                            className='w-full h-56 object-cover rounded-lg mb-4'
                        />

                        <h2 className='text-xl font-bold mb-2'>{selectedProject.title}</h2>
                        <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>{selectedProject.description}</p>
                        <a href={selectedProject.link} target='_blank' rel='noopener norefferer'>View Project</a>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Portfolio
