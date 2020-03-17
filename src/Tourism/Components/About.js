import React from 'react';
import './../sass/main.scss'

const About = ()=>{
  return(
    <div>
      <section className='section-about'>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className='heading-secondary'>Exciting tours for Marlians</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className= 'heading-tertiary u-margin-bottom-small '> You are going to fall in love with nature </h3>
            <p className='paragraph'>Being outside can be an amazing experience, discover new things, experience what bring joy and happiness into ones heart. Nature has its amazing way of showing you the most beautiful things ever. Watch this space for great experience</p>
            <h3 className= 'heading-tertiary u-margin-bottom-small'> Live adventures like you've never have before </h3>
            <p className='paragraph'>Adventure the enligthener, you only come across great things when you are daring. Lets guide you through the process of making the biggest kill of adventure. Watch this space for great experience</p>
            <a href='button2' className='btn-text'>beautify &rarr;</a>
          </div>
          <div className='col-1-of-2'>
            <div className= 'composition'>
              <img src='./../images/p1.jpg' alt='first' className='composition__photo composition__photo--p1'/>
              <img src='./../images/p2.jpg' alt='second' className='composition__photo composition__photo--p2'/>
              <img src='./../images/p31.jpg' alt='third' className='composition__photo composition__photo--p3'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About;
