import React from 'react';
import './../../../../sass/main2.scss';


function CustomerItem(props){
  return(
    <figure className='review'>
        <blockquote className='review__text'>
        {props.customer.text}
        </blockquote>
        <figcaption className='review__user'>
          <img className='review__photo' src={props.customer.image} alt='review1'/>
          <div className='review__user-box'>
            <p className='review__user-name'>{props.customer.name}</p>
            <p className='review__user-date'>{props.customer.date}</p>
          </div>
          <div className='review__rating'>{props.customer.rating}</div>
        </figcaption>
    </figure>
  )
}
export default CustomerItem;
