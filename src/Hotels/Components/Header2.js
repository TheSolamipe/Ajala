import React from 'react';
import './../sass/main2.scss';

function Header2(){
  return(
    <div className='header2'>
        <h1 className='headg__logo'>AJALA</h1>
        <form className='headg__search' action='#'>
          <input className="headg__search--input" type='text' placeholder="search hotels"/>
          <button className='headg__search--button'>
            <svg className='headg__search--icon'>
              <use href="./../../../images/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>

        <nav className='user-nav'>
          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use href="./../../../images/sprite.svg#icon-bookmark"></use>
            </svg>
            <span className='user-nav__notification'>7</span>
          </div>
          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use href="./../../../images/sprite.svg#icon-chat"></use>
            </svg>
            <span className='user-nav__notification'>13</span>
          </div>
          <div className='user-nav__user'>
            <img src='./../../images/user3.jpg' className='user-nav__user-photo' alt='userp' />
            <span className='user-nav__user-name'>Sholly</span>
          </div>
        </nav>

    </div>
  )
}
export default Header2;
