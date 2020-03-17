import React from 'react';
import CarData from './Cardealers/Cardata';
import CarItems from './Cardealers/CarItems';
import './../sass/main3.scss'

class Cardealers extends React.Component{
  constructor(){
    super();
    this.state ={
        dealers: CarData
     }
  }
  render(){
    const dealerComponent = this.state.dealers.map(cardealer => <CarItems key={cardealer.id} cardealer={cardealer} />)
    return(
      <div className="Car-dealers">
        <h6 className='heading-3 text-blue'>Top car dealers</h6>
        <div className='car-dealer__list'>{dealerComponent}</div>
      </div>
    )
  }
}
export default Cardealers;
