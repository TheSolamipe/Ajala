import React from 'react';
import './../../../sass/main2.scss';


function Description(){
  return(
    <div>
        <p className='paragraph2'>You can create your own fun, life is about living every moment in an enjoyable manner ensuring you are finding something fun out of what you are doing. Even when it seems stressful, you can create your own fun around it and convince your mind to enjoy the moment. </p>
        <p className= 'paragraph2'>Have you ever being told a life story by an old man ? he would tell you not to waste time worrying about things outside your control, rather focus your mind on things you can control and ensure every moment is worth it.</p>
        <ul className= 'detail-list'>
          <li className='detail-list__item'>Close to the beach</li>
          <li className='detail-list__item'>Breakfast included</li>
          <li className='detail-list__item'>Free airpod shuttle</li>
          <li className='detail-list__item'>Free Wifi in all rooms</li>
          <li className='detail-list__item'>Air conditioning and heating</li>
          <li className='detail-list__item'>Pets allowed</li>
          <li className='detail-list__item'>We speak all languages</li>
          <li className='detail-list__item'>Perfect for families</li>
        </ul>
        <div className='recommend'>
          <p className='recommend__count'>
            Lucy and 20 other friends recommend this hotel
          </p>
          <div className="recommend__friends">
            <img src='./../../../../images/user2.jpg' alt='friend1' className='recommend__photo' />
            <img src='./../../../../images/user5.jpg' alt='friend2' className='recommend__photo' />
            <img src='./../../../../images/user6.jpg' alt='friend3' className='recommend__photo' />
            <img src='./../../../../images/user7.jpg' alt='friend4' className='recommend__photo' />
          </div>
        </div>
    </div>
  )
}
export default Description;
