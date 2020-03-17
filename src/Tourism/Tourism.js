import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Feature from './Components/Feature/Feature';
import Tour from './Components/Tour/Tour';
import Story from './Components/Story/Story';
import Booking from './Components/Booking';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Popup from './Components/Popup';
import './sass/base/_base.scss';

function Tourism() {
  return (
    <div className="Tourism">
      <Navigation />
      <Header  />
      <About  />
      <Feature  />
      <Tour />
      <Story />
      <Booking />
      <Footer />
      <Popup />
    </div>
  );
}

export default Tourism;
