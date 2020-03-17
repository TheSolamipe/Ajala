import React from 'react';
import StoryItem from './storyItem';
import StoryData from './storyData';

class Story extends React.Component{
  constructor(){
    super();
    this.state ={
      stories: StoryData
    }
  }

  render(){
    const storyComponent = this.state.stories.map(story => <StoryItem key={story.id} story={story} />)
    
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

        {storyComponent}

        <div className='u-center-text u-margin-top-huge'>
          <a href='more stories' className='btn-text'>Read more stories &rarr;</a>
        </div>

      </div>
    )
  }
}
export default Story;
