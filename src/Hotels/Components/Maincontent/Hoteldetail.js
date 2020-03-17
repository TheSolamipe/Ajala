import React from 'react';
import './../../sass/main2.scss';
import Description from './Hoteldetail/Description';
import CustomerReview from './Hoteldetail/CustomerReview';

function HotelDetail(){
  return(
    <div className='hoteldetail'>
      <div className='description'><Description /> </div>
      <div><CustomerReview /> </div>
    </div>
  )
}
export default HotelDetail;
