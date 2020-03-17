import React from 'react';
import './../sass/main.scss';

function Booking(){
  return(
    <div className='section-book'>
      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form className='form' action='#'>
              <div className="u-margin-bottom-medium">
                <h2 className='heading-secondary heading-sec2'>Start Booking now</h2>
              </div>

              <div className='form__group'>
                <input className='form__input' type='text' placeholder='Full Name' id='name' required/>
                <label htmlFor='name' className= 'form__label'>Full Name</label>
              </div>

              <div className='form__group'>
                <input className='form__input' type='email' placeholder='Email Address' id='email' required/>
                <label htmlFor='email' className= 'form__label'>Email Address</label>
              </div>

              <div className='form__group u-margin-bottom-medium'>
                <div className= 'form__radio-group'>
                    <input className='form__radio-input' type='radio' id='small' name='size'/>
                    <label htmlFor='small' className= 'form__radio-label'>
                      <span className='form__radio-button'></span>
                      Small tour group
                    </label>
                </div>

                <div className= 'form__radio-group'>
                    <input className='form__radio-input' type='radio' id='large' name='size'/>
                    <label htmlFor='large' className= 'form__radio-label'>
                      <span className='form__radio-button'></span>
                      Large tour group
                    </label>
                </div>
              </div>

              <div className='form__group'>
                <button href='yudaay.com' className='btn btn-form--orange'>Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Booking;
