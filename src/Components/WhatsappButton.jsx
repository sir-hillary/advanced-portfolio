import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {

    const whatsappnumber = "254726436088";
  return (
    <a 
    href={`https://wa.me/${whatsappnumber}`}
    rel='noopener norefferer'
    target="_blank"
    className='fixed botom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors'
    >
        <FaWhatsapp className='text-white text-2xl'/>
    </a>
  )
}

export default WhatsappButton
