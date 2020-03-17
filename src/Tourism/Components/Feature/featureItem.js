import React from 'react';
import './../../styles/icon-font.css';
import './../../sass/main.scss';

const FeatureItem = (props)=>{
  return(
        <div className='col-1-of-4'>
          <div className='feature-box'>
              <i className={props.feature.icon}></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>{props.feature.heading}</h3>
              <p className='feature-box__text'>{props.feature.text}</p>
          </div>
        </div>
  )
}

export default FeatureItem;
