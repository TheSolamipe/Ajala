import React from 'react';
import './../../sass/main2.scss';

function Gallery(){
  return(
    <div className='gallery'>
      <figure className='gallery__item'>
        <img src='./../../../images/hotel1.jpg' alt='hotel1' className='gallery__photo'/>
      </figure>
      <figure className='gallery__item'>
        <img src='./../../../images/hotel6.jpg' alt='hotel2' className='gallery__photo'/>
      </figure>
      <figure className='gallery__item'>
        <img src='./../../../images/hotel2.jpg' alt='hotel3' className='gallery__photo'/>
      </figure>
    </div>
  )

}
export default Gallery;
