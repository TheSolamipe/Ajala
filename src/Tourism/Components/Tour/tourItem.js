import React from 'react';
import './../../sass/main.scss';

const TourItem = (props)=>{
  return(
          <div className='col-1-of-3'>
            <div className= 'card'>
              <div className='card__side card__side--front'>
                <div className= {props.tour.cardPicture} >
                </div>
                <div className= 'card__heading'>
                    <span className= {props.tour.cardHeading}>{props.tour.cardHead}</span>
                    <span className= {props.tour.cardSubing}>{props.tour.cardSub}</span>
                </div>
                <div className= 'card__details'>
                  <ul>
                    <li>{props.tour.list1}</li>
                    <li>{props.tour.list2}</li>
                    <li>{props.tour.list3}</li>
                    <li>{props.tour.list4}</li>
                    <li>{props.tour.list5}</li>
                  </ul>
                </div>

              </div>
              <div className={props.tour.cardBack}>
                <div className='card__back-content'>
                    <p className= {props.tour.cardbText}>only</p>
                    <p className= {props.tour.cardbPrice}>{props.tour.price}</p>
                </div>
                <a href='#popup' className='btn btn--white btn__card--back '>BOOK NOW!</a>
              </div>
            </div>
          </div>
  )
}
export default TourItem;
