import React from 'react';
import './../../sass/main2.scss';
import {Link} from 'react-router-dom';

function SideItem(props){
  return(
          <li className='side-nav__item2'>
            <Link to={props.sidebar.link} className='side-nav__link2'>
              <svg className='side-nav__icon2'>
                <use href={props.sidebar.image}></use>
              </svg>
              <span className='side-nav__text2'>{props.sidebar.name}</span>
            </Link>
          </li>
  )
}
export default SideItem;
