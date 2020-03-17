import React from 'react';
import './../sass/main.scss';
import {Link} from 'react-router-dom';

const Navigation = ()=>{
  return(
    <div className='navigation'>
      <input className='navigation__checkbox' type='checkbox' id='navi-toggle'/>
      <label className='navigation__button' htmlFor='navi-toggle'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>
      <div className='navigation__background'>&nbsp;</div>
      <nav className='navigation__nav'>
        <ul className='navigation__list'>
            <Link to='/tourism' className='navigation__link'><li className='navigation__item'><span>01</span>About Ajala</li></Link>
            <Link to='/hotels' className='navigation__link'><li className='navigation__item'><span>02</span>Hotels</li></Link>
            <Link to='/tourism' className='navigation__link'><li className='navigation__item'><span>03</span>Popular Tours</li></Link>
            <Link to='/cars' className='navigation__link'><li className='navigation__item'><span>04</span>Rental Cars</li></Link>
            <Link to='/hotels' className='navigation__link'><li className='navigation__item'><span>05</span>Book Now</li></Link>
        </ul>
      </nav>
    </div>
  )
}
export default Navigation;
