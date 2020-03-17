import React from 'react';
import './../sass/main.scss';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundImage: "url('./../images/maldive.jpg'), linear-gradient(to right bottom, #e7e00c, #c40a0a)"
      // logo: "url('url-to-logo.png')";
    }
  }
  render() {
    return (
      <HeaderBlock
        backgroundImage={this.state.backgroundImage}
        // logo={this.state.logo}
        />
    )
  }
}

const HeaderBlock = (props)=>{
  return(
    <div>
      <header className='header'   style={{backgroundImage: props.backgroundImage}} >
        <div className= 'header__nav'>
            <div className='nav-primary'>
              <h1 className='nav-primary__logo'>AJALA</h1>
            </div>
        </div>

        <div className='header__text-box '>
          <h1 className='heading-primary'>
            <span className= 'heading-primary--main'>OUTDOORS</span>
            <span className= 'heading-primary--sub'>This is where life happens</span>
          </h1>

        </div>
          <a href='yudaay.com' className='btn btn_center btn--white btn--animated'>Discover our tour &rarr;</a>
      </header>
    </div>
  )
}
export default Header;
