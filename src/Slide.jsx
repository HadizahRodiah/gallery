import React from 'react'
import slide1 from './assets/slide1.jpg'
import slide2 from './assets/slide2.jpg'
import slide3 from './assets/slide3.jpg'
import slide4 from './assets/slide4.jpg'

export const Slide = () => {
      return (
      <div className='all-wrapped' id='display'>   
        <div className='wrapped'>
         <div className='wrapped-text'>
  <p>
    modelling in the blood,fashion world is getting bigger,
    do not take anything serious, just some random worlds,
    all is just dummy.Almas is into tech not fashion.
  </p>
  <h1>
    FASHION
  </h1>
 
  </div>
        <div className='wrapper'>
            <figure>
        <div className='item'>
           <img src={slide1}/>
        </div>
        <div className='item'>
           <img src={slide2}/>
        </div>
        <div className='item'>
           <img src={slide3}/>
        </div>
        <div className='item'>
           <img src={slide4}/>
        </div>
        <div className='item'>
           <img src={slide1}/>
        </div>
        <div className='item'>
           <img src={slide2}/>
        </div>
        <div className='item'>
           <img src={slide3}/>
        </div>
        <div className='item'>
           <img src={slide4}/>
        </div>
        </figure>
        </div>
        <div className='wrapped-text'>
        <h1>
    FASHION
  </h1>
  <p>
    modelling in the blood,fashion world is getting bigger,
    do not take anything serious, just some random worlds,
    all is just dummy.Almas is into tech not fashion.
  </p>
  </div>
 
        </div>
        </div>
)
}
export default Slide
