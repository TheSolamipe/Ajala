import React from 'react';
import './../styles/icon-font.css';
import './../sass/main.scss';

const Feature = ()=>{
  return(
    <div className='section-features'>
      <div className='row'>
        <div className='col-1-of-4'>
          <div className='feature-box'>
              <i className='feature-box-icon icon-basic-world'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>Explore the World</h3>
              <p className='feature-box__text'>Adventure the enligthener, you only come across great things when you are daring.</p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
              <i className='feature-box-icon icon-basic-compass'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>Meet Nature</h3>
              <p className='feature-box__text'>Lets guide you through the process of making the biggest kill of adventure.</p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
              <i className='feature-box-icon icon-basic-map'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>Find your way</h3>
              <p className='feature-box__text'>Adventure the enligthener, you only come across great things when you are daring.</p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
              <i className='feature-box-icon icon-basic-heart'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>Live a healthier life</h3>
              <p className='feature-box__text'>Lets guide you through the process of making the biggest kill of adventure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Feature;
