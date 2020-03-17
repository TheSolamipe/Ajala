import React from 'react';
import FeatureItem from './featureItem'
import FeatureData from './featureData'
import './../../sass/main.scss';

class Feature extends React.Component{
  constructor(){
    super();
    this.state={
      features: FeatureData
    }
  }

  render(){
    const featureComponent = this.state.features.map(feature => <FeatureItem key= {feature.id} feature={feature}/>)
    return(
      <div className='section-features'>
        <div className='row'>
          {featureComponent}
        </div>
      </div>
    )
  }
}
export default Feature;
