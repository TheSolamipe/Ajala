import React from 'react';
import './../../sass/main2.scss';

function OverView(){
  return(
    <div className='overview'>
      <h1 className='overview__heading'>
        Hotel Maldives
      </h1>
      <div className='overview__stars'>
        <svg className='overview__icon-star'>
          <use href='./../../images/sprite.svg#icon-star'></use>
        </svg>
        <svg className='overview__icon-star'>
          <use href='./../../images/sprite.svg#icon-star'></use>
        </svg>
        <svg className='overview__icon-star'>
          <use href='./../../images/sprite.svg#icon-star'></use>
        </svg>
        <svg className='overview__icon-star'>
          <use href='./../../images/sprite.svg#icon-star'></use>
        </svg>
        <svg className='overview__icon-star'>
          <use href='./../../images/sprite.svg#icon-star'></use>
        </svg>
      </div>
      <div className='overview__location'>
        <svg className='overview__icon-locator'>
          <use href='./../../images/sprite.svg#icon-location-pin'></use>
        </svg>
        <button className='btn-inline'>Sea-side, Peurto Rico</button>
      </div>
      <div className='overview__rating'>
        <div className='overview__rating-average'>8.6</div>
        <div className='overview__rating-count'>429 votes</div>
      </div>
    </div>
  )

}
export default OverView;
