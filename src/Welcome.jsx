import React from 'react'
import back from './assets/back.jpg'
import back1 from './assets/back1.jpg'


const Welcome = () => {
  return (
  <div className='welcome' id='home'>
     <nav className='text-black font-bold px-8  md:px-16 lg:px-24'>
               <div className='text-4xl pb-3 mr-10 pl-5 font-bolder hidden md:inline'>
                 A-F
                </div>

                <div className='space-x-12 mr-5 font-bold'>
                <a href="#home " className=' text-2xl'>Home</a>
                <a href="#about " className='text-2xl'>About</a>
                <a href="#gallery " className='text-2xl'>Gallery</a>
                <a href="#display " className='text-2xl'>Display</a>
                <a href="#contact " className='text-2xl'>Contact</a>
                <a  id="nav-a" href='#gallery'className='font-bold bg-gradient-to-r from-stone-200 to-stone-500 text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Explore</a>
                </div>
            </nav>
  <div className='welcome-text'>
    <div className='main'>
    <h4
  >WELCOME</h4>
<h1 className='text-transparent bg-clip-text bg-gradient-to-r
         from-green-900 to-blue-500'>EXPLORE</h1>
    </div>    
  <a href='#contact'className='font-bold bg-gradient-to-r from-stone-500 to-stone-50 text-black hidden md:inline    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>connect me</a>

  </div>
  <div className='image'>
    <img src={back}></img>
    <img src={back1}></img>

  </div>
  </div> 
  )
}

export default Welcome