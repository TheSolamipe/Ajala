import React from 'react';
import FeatureData3 from './Features3/FeatureData3';
import FeatureItems3 from './Features3/FeatureItems3';

class Features3 extends React.Component{
  constructor(){
    super();
    this.state = {
      features: FeatureData3
    }
  }
  render(){
    const featureComponent = this.state.features.map(feature3 => <FeatureItems3 key={feature3.id} feature3={feature3} />)
    return(
      <div className="Features3">{featureComponent}</div>
    )
  }
}
export default Features3;
