import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            'service_zynacgp',
            'template_sc0p5cr',
            form.current,
            'eXCETMVw5om5JDZEs'
        )
        .then(
            (result) => {
                console.log(result.text);
                alert("message sent successfully!");
                form.current.reset();
            },
            (error) =>{
                console.log(error.text);
                alert('something went wrong')
            }
        );
    };

    return (
        <section id='contact' className='py-12 md:py-20'>
            <div className='w-[90%] mx-auto max-w-screen-md text-center'>
                <h2 className='text-2xl md:text-4xl font-bold mb-10' data-aos="fade-up">Contact Me</h2>

                {/*this is a contact form */}

                <form ref={form} onSubmit={sendEmail} className='spce-y-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-left mb-2 font-medium text-gray-700 dark:text-gray-300'>Your Name:</label>
                        <input 
                        type="text"
                        name='user_name'
                        id='name'
                        required
                        className='p-3 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email"
                        className='text-left mb-2 font-medium text-gray-700 dark:text-gray-300'
                        >Your Email:</label>
                        <input 
                        type="email"
                        name='user_email'
                        id='email'
                        required
                        className='p-3 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message"
                        className='text-left mb-2 font-medium text-gray-700 dark:text-gray-300'
                        >Your Message:</label>
                       <textarea 
                       name="message" 
                       id="message"
                       rows={5}
                       required
                       className='p-3 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                       ></textarea>
                    </div>

                    <button
                    type='submit'
                    className='mt-4 px-8 py-3 bg-white shadow-lg hover:bg-yellow-500 rounded-full font-bold text-gray-900 transition'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
