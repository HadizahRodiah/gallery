import React from 'react'
import Ima from './assets/Ima.jpg'
import Imb from './assets/Imb.jpg'
import Imc from './assets/Imc.jpg'
import Imf from './assets/Imf.jpg'
import Img from './assets/Img.jpg'
import Imh from './assets/Imh.jpg'


const Noble = () => {
  const boy = [
    {
      id:1,
      name:"Name",
      information:"Information",
      image:Ima
    },
    {
      id:2,
      name:"Name",
      information:"Information",
      image:Imb
    },
    {
      id:3,
      name:"Name",
      information:"Information",
      image:Imc
    },
    {
      id:4,
      name:"Name",
      information:"Information",
      image:Imh
    },
    {
      id:5,
      name:"Name",
      information:"Information",
      image:Imf
    },
    {
      id:6,
      name:"Name",
      information:"Information",
      image:Ima
    },
    {
      id:7,
      name:"Name",
      information:"Information",
      image:Imb
    },
    {
      id:8,
      name:"Name",
      information:"Information",
      image:Img
    },
    {
      id:9,
      name:"Name",
      information:"Information",
      image:Imh
    },
  ]
  return (
    <div className='Box  bg-slate-200' id='gallery' >
         <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-4'>Gallery</h2>
            </div>
        
         {boy.map(boy=>(
          <div className='contain' key={boy.id}>
          <div className="content">      
          <span>
          <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r
         from-slate-400 to-slate-500'>{boy.id}</h1>
          <img src={boy.image} alt=""  className='mx-auto mb-30 w-48 h-30 rounded-sm object-cover transform-transition-transform duration-300 hover:scale-105' />
            <h2 className='bg-gradient-to-r
         from-slate-800 to-slate-500 text-white font-bold mb-5 mr-5'>{boy.information}</h2>
            <h2 className='bg-gradient-to-r
         from-slate-500 to-slate-800 text-white font-bold mb-5 mr-5'>{boy.name}</h2>

          </span>
        </div>
          </div>
         ))}
         </div>
  )
}

export default Noble
