import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction';
import Aos from 'aos';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WhatsappButton from './Components/WhatsappButton';

const App = () => {

  const [darkMode, setDarkMode] = useState(()=>{
    const storedMode = localStorage.getItem("darkmode");
    return storedMode ? JSON.parse(storedMode): false;
  });

  /* this is useeffect for the darkmode */

  
  useEffect(() => {
    
    localStorage.setItem('darkmode', JSON.stringify(darkMode))

    if (darkMode) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }

  }, [darkMode])

  /* this is useeffect for the animate on scroll */

  useEffect(() => {

    Aos.init({
      duration: 800,
      once: true, //animation only once when scrolled into view
    })

  }, [])

  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }
 
  
  return (
    <div className=' flex flex-col w-[90%] max-w-screen-xl mx-auto text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden transition-colors duration-300 ease-in-out'>
      <div className="w-[90%] max-w-screen-xl mx-auto flex flex-col">
        <div className="mb-4 z-10 relative">
          <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
          <WhatsappButton/>
        </div>
        <main className='flex-grow'>

          <Introduction />
          <Portfolio />
          <Skills />
          <Contact />
        </main>
        <Footer>
          <Footer />
        </Footer>


      </div>
    </div>
  )
}

export default App
