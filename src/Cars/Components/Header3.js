import React from 'react';
import './../sass/main3.scss'

function Header3(){
  return(
    <div className="Header3">
      <h2 className='header3__logo'>Ajala Cars</h2>
      <h4 className='heading-3 text-blue'>Your own car:</h4>
      <h1 className='heading-1 text-white'>The Ulitimate personal freedom</h1>
      <button className='btn-cars3 header3__btn'>View our Luxurious cars</button>
      <div className='header3__partners--title'>As seen on</div>
      <div className='header3__partners'>
          <h2 className='header3__partners--1'>BBC</h2>
          <h2 className='header3__partners--2'>Forbes</h2>
          <h2 className='header3__partners--3'>TechCrunch</h2>
          <h2 className='header3__partners--4'>Business Insider</h2>
      </div>
    </div>
  )

}
export default Header3;
