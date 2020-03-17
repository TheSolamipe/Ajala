import React from 'react';
import GalleryData from './Gallery3/GalleryData';
import GalleryItem from './Gallery3/GalleryItem';

class Gallaries extends React.Component{
  constructor(){
    super();
    this.state ={
        gallaries: GalleryData
     }
  }
  render(){
    const galleryComponent = this.state.gallaries.map(gallery => <GalleryItem key={gallery.id} gallery={gallery} />)
    return(
      <div className="Gallery3">
        {galleryComponent}
      </div>
    )
  }
}
export default Gallaries;
