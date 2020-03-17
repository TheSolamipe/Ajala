import React from 'react';
// import './../Tourism/sass/base/_base.scss';
import './sass/main2.scss';
import Header2 from './Components/Header2';
import SideBar from './Components/Sidebar';
import MainContent from './Components/Maincontent';

function Hotels(){
  return(
    <div className='Hotels'>
      <div className='container'>
        <Header2 />
        <div className='content'>
          <div className='content__side2'><SideBar /></div>
          <div className='content__main2'><MainContent /></div>
        </div>
      </div>
    </div>
  )
}
export default Hotels;
