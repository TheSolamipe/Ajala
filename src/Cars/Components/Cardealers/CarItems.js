import React from 'react';

function CarItems(props){
  return(
    <div className='car-dealer__item'>
      <img className='car-dealer__img' src={props.cardealer.image} alt={props.cardealer.dealer} />
      <div className='car-dealer__details'>
        <h4 className='heading-3 text-white'>{props.cardealer.dealerName}</h4>
        <p className='car-dealer__sold'>{props.cardealer.dealerDetails}</p>
      </div>
    </div>
  )
}
export default CarItems;
