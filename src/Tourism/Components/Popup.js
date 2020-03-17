import React from 'react';
import './../sass/main.scss';

const Popup = ()=>{
  return(
    <div className='popup' id='popup'>
      <div className='popup__content'>
        <div className='popup__left'>
          <img src='./../images/james.jpg' alt='pop' className='popup__content--img'/>
          <img src='./../images/rio.jpg' alt='pop' className='popup__content--img'/>
        </div>
        <a href='#section-tours' className='popup__close'>&times;</a>
        <div className='popup__right'>
          <div className="u-margin-bottom-small">
            <h2 className='heading-secondary'>Start booking now</h2>
            <h3 className='heading-tertiary'>important &ndash; please read the terms and conditions first</h3>
          </div>
          <div className='row row-popup'>
            <div className='col-1-of-2'>
              Amazing things often happen. Sometimes my mind deviates to the reality of my greatness, being aware of this helps me maintain my standards and know my selfworth. Greatness is written all over so no settling for less. You understand my nigga, rep the team.
            </div>
            <div className='col-1-of-2'>
              Funny thing about the concept of singularity is the fact that you can derive the meaning of a thing or a phenomena from another one. Basically your ability to understand one concept can be replicated in a new environ. Just understand the basics of its being.
            </div>
          </div>
          <button href='yudaay.com' className='btn btn-form--red btn-popup'>Book now</button>
        </div>
      </div>
    </div>
  )
}
export default Popup;
