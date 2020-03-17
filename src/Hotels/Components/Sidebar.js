import React from 'react';
import './../sass/main2.scss';
import SideItem from './Sidebar/Sideitem';
import SideData from './Sidebar/Sidedata';

class SideBar extends React.Component{
  constructor(){
    super();
    this.state={
      sides: SideData
    }
  }

  render(){
    const sideComponent = this.state.sides.map(sidebar => <SideItem key={sidebar.id} sidebar={sidebar}/>)
    return(
      <div className='sidebar2'>
        <ul className='side-nav2'>
          {sideComponent}
        </ul>
        <div className='legal2'>
          &copy; 2020 by sholly. All rights reserved by Trillo
        </div>
      </div>
    )
  }

}
export default SideBar;
