import React, {Component} from 'react';
import './../../sass/main.scss';
import TourItem from './tourItem';
import TourData from './tourData';

class Tour extends Component{
  constructor(){
    super();
    this.state={
      tours: TourData
    }
  }

  render(){
    const tourComponent = this.state.tours.map(tour => <TourItem key = {tour.id} tour={tour}/>)
    return(
      <div className='section-tours'>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className='heading-secondary'>Most popular tours</h2>
          </div>
          <div className='row'>
              {tourComponent}
          </div>
        <div className='u-center-text u-margin-top-huge'>
          <a href='pick-tour' className= 'btn btn-form--orange btn-discover'>Discover all tours</a>
        </div>
    </div>
    )
  }
}


export default Tour;
