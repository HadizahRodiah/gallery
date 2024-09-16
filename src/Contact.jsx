import React from 'react'
import soc1 from './assets/soc1.png'
import soc2 from './assets/soc2.png'
import soc3 from './assets/soc3.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>  
    <div className='contact-box'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-6'>Contact</h2>
            </div>
      
      <div className='social'>
        <a href='#'><img src={soc2}></img><h2>+23400000000</h2></a>
        <a href='#'><img src={soc1}></img><h2>linkedin</h2></a>
        <a href='#'><img src={soc3}></img><h2>Whatsapp</h2></a>
      </div>

     <div className='form'>
        <form  className='font-bold'>
      <label htmlFor='Name' className='block mb-2'>Name</label>
      <input type='text' placeholder='Enter your name'  className='w-full p-2 rounded  border border-gray-600 focus:outline-none focus:border-green-400'></input>  
      <label htmlFor='Email' className='block mb-2'>Email</label>
      <input type='text' placeholder='Enter your Email' className='w-full p-2 rounded  border border-gray-600 focus:outline-none focus:border-green-400'></input>  
      <label htmlFor='Text' className='block mb-2'>Message</label>
      <textarea type='text' rows='5' className='w-full p-2 rounded  border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your message'></textarea>
      <button type='submit' value='Send'className='font-bold bg-gradient-to-r from-slate-500 to-slate-50 text-black hidden
       md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
          </form>  
      </div>
    </div>
    </div>
  )
}

export default Contact