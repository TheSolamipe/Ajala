import React from 'react';
import './../sass/main.scss';

function Footer(){
  return(
    <div className='footer'>
        <div className='footer__logo-box'>
            <h1 className='footer__logo'>AJALA</h1>
        </div>

        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
                <ul className='footer__list'>
                  <li className='footer__item'><a href='samid' className='footer__link'>COMPANY</a></li>
                  <li className='footer__item'><a href='samid' className='footer__link'>CONTACT US</a></li>
                  <li className='footer__item'><a href='samid' className='footer__link'>CARRERS</a></li>
                  <li className='footer__item'><a href='samid' className='footer__link'>PRIVACY POLICY</a></li>
                  <li className='footer__item'><a href='samid' className='footer__link'>TERMS</a></li>
                </ul>
            </div>
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              built by <a href='samid' className='footer__link'>Akinola Solamipe</a> while learning <a href='samid' className='footer__link'>Advance CSS and Sass</a>. Copyright &copy; by Akinola Solamipe. Accredicted to original author Jonas Schmedtmann!
            </p>
          </div>
        </div>
    </div>
  )
}
export default Footer;
