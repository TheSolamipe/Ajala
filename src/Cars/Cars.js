import React from "react";
import Sidebar3 from './Components/Sidebar3'
import Header3 from './Components/Header3'
import Cardealers from './Components/Cardealers'
import Features3 from './Components/Features3'
import StoryPictures3 from './Components/StoryPictures3'
import StoryContent3 from './Components/StoryContent3'
import Luxuries from './Components/Luxuries'
import Galleries from './Components/Gallery3'
import Footer3 from './Components/Footer3'
import "./sass/main3.scss"

const Cars = ()=>{
  return(
    <div className="Cars">
      <Sidebar3 />
      <Header3 />
      <Cardealers />
      <Features3 />
      <StoryPictures3 />
      <StoryContent3 />
      <Luxuries />
      <Galleries />
      <Footer3 />
    </div>
  )
}
export default Cars;
