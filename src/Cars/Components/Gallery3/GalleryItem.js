import React from 'react';
import './../../sass/main3.scss';

function GalleryItem(props){
  return(
    <div className={props.gallery.class}>
      <img className='gallery__img' src={props.gallery.image} alt={props.gallery.name} />
    </div>
  )
}
export default GalleryItem;
