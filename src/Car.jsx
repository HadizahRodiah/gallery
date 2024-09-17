import React from 'react'
import Ima from './assets/Ima.jpg'
import Imb from './assets/Imb.jpg'
import Imc from './assets/Imc.jpg'
import Imf from './assets/Imf.jpg'
import Img from './assets/Img.jpg'
import Imh from './assets/Imh.jpg'

const Car = () => {
  return (
    
        <div className='Boxer' id='about'>
      <div className='Box1'>
      <div className="boxs">
<div className='slider'>
  <figure>
    <div className="slide">
      <img src={Ima}>
      </img>
     </div>
     <div className="slide">
      <img src={Imb}>
      </img>
     </div>
     <div className="slide">
      <img src={Imc}>
      </img>
     </div>
     <div className="slide">
      <h1>
      ALMAS FASHION WORLD
      </h1>
     </div>
  </figure>
</div>
</div>
<div className='box'>
<div className='box-text'>
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

<div className="Box2">
<div className='box'>
  <div className='box-text'>
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
<div className='boxs'>
<div className='slider'>
  <figure>
    <div className="slide">
      <img src={Imf}>
      </img>
     </div>
     <div className="slide">
      <img src={Img}>
      </img>
     </div>
     <div className="slide">
      <img src={Imh}>
      </img>
     </div>
     <div className="slide">
      <h1>
      ALMAS FASHION WORLD
      </h1>
     </div>
  </figure>
  </div>
</div>
</div>
</div>
  )
}

export default Car