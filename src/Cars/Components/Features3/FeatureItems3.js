import React from 'react';
import './../../sass/main3.scss';

function FeatureItems3(props){
  return(
    <div className='feature3'>
      <svg className='feature3-icon'>
        <use href={props.feature3.icon}></use>
      </svg>
      <h4 className='heading-4 heading-4--dark'>{props.feature3.featureHead}</h4>
      <p className='feature3-text'>{props.feature3.featureDetails}</p>
    </div>
  )
}
export default FeatureItems3;
