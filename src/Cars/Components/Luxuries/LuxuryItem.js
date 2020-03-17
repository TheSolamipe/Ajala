import React from 'react';
import './../../sass/main3.scss';

function LuxuryItem(props){
  return(
    <div className='luxury'>
      <img className='luxury__image'src={props.luxury.image} alt={props.luxury.luxuryname} />
      <svg className='luxury__icon'>
        <use href="./../../../images/sprite.svg#icon-location-pin"></use>
      </svg>
      <h5 className='luxury__name'>{props.luxury.luxuryname}</h5>
      <div className='luxury__location'>
        <svg><use href="./../../../images/sprite.svg#icon-location-pin"></use></svg>
        <p>{props.luxury.location}</p>
      </div>
      <div className='luxury__fuel'>
        <svg><use href="./../../../images/sprite.svg#icon-aircraft-take-off"></use></svg>
        <p>{props.luxury.fuel}</p>
      </div>
      <div className='luxury__power'>
        <svg><use href="./../../../images/sprite.svg#icon-home"></use></svg>
        <p>{props.luxury.power}</p>
      </div>
      <div className='luxury__price'>
        <svg><use href="./../../../images/sprite.svg#icon-key"></use></svg>
        <p>${props.luxury.price}</p>
      </div>
      <button className="luxury__btn btn-cars3">contact dealer</button>
    </div>
  )
}
export default LuxuryItem;
