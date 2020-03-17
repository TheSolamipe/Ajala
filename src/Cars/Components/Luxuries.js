import React from 'react';
import LuxuryData from './Luxuries/Luxurydata';
import LuxuryItem from './Luxuries/LuxuryItem';

class Luxuries extends React.Component{
  constructor(){
    super();
    this.state ={
        luxuries: LuxuryData
     }
  }
  render(){
    const luxuryComponent = this.state.luxuries.map(luxury => <LuxuryItem key={luxury.id} luxury={luxury} />)
    return(
      <div className="Luxury3">
        {luxuryComponent}
      </div>
    )
  }
}
export default Luxuries;
