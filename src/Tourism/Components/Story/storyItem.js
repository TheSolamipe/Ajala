import React from 'react';
import './../../sass/main.scss'

const StoryItem = (props)=>{
  return(

      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img src={props.story.image} alt='person on a tour' className='story__image'/>
            <figcaption className='story__caption'>{props.story.name}</figcaption>
          </figure>
          <div className= 'story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>{props.story.title}</h3>
            <p>{props.story.text}</p>
          </div>
        </div>
      </div>
  )
}
export default StoryItem;
