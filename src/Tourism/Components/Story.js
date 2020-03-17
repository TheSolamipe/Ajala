import React from 'react';

function Story(){
  return(
    <div className='section-story'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay='yes' muted loop>
            <source src='./../images/Bridge.mp4' type='video/mp4'/>
            <source src='./../images/Bridge.webm' type='video/webm'/>
            Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className='heading-secondary'>We make people genuinely happy</h2>
      </div>
      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img src='./../images/man.jpg' alt='person on a tour' className='story__image'/>
            <figcaption className='story__caption'>Marly Atawewe</figcaption>
          </figure>
          <div className= 'story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>Ajala made my holiday worthwhile</h3>
            <p>After parte after parte was my mood through out the trip with Ajala. Omo ope just they chill with better babes for Seychelles. Oh! I miss the view of the beautiful sea, those memories are gonna be there for a while. Only thing i want from Ajala now is to add extra places we can chill.</p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img src='./../images/woman.jpg' alt='person on a tour' className='story__image'/>
            <figcaption className='story__caption'>Sophie Pretty</figcaption>
          </figure>
          <div className= 'story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>I had the best week ever with my family</h3>
            <p>Being outside can be an amazing experience, discovered new things, experienced what brings joy and happiness into ones heart. Nature has its amazing way of showing you the most beautiful things ever. Ajala gave me a great experience. For sure, this is a brand that doesn't fail on promises.</p>
          </div>
        </div>
      </div>

      <div className='u-center-text u-margin-top-huge'>
        <a href='more stories' className='btn-text'>Read more stories &rarr;</a>
      </div>

    </div>
  )
}
export default Story;
