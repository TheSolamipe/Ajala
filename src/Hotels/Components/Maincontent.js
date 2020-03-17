import React from 'react';
import './../sass/main2.scss';
import Gallery from './Maincontent/Gallery';
import OverView from './Maincontent/Overview';
import HotelDetail from './Maincontent/Hoteldetail';
import CallToAction from './Maincontent/Calltoaction';

function MainContent(){
  return(
    <div>
    <Gallery />
    <OverView />
    <HotelDetail />
    <CallToAction />
    </div>
  )
}
export default MainContent;
