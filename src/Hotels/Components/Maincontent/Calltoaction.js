import React from 'react';
import './../../sass/main2.scss';

function CallToAction(){
  return(
    <div className='cta'>
     <h2 className='cta__book-now'>
      Good News we have 5 free rooms for your selected dates!
     </h2>
     <button className='btn2'>
        <span className='btn2__visible'>Book now</span>
        <span className='btn2__invisible'>Only 4 rooms left</span>
     </button>
    </div>
  )
}
export default CallToAction;
