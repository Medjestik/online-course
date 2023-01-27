import React from 'react';
import Popup from '../Popup.js';

function SuccessPopup({ isOpen, onClose }) {

  return (
    <Popup 
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className='popup__form' name='success-popup' noValidate>
        <h3 className='popup__title'>Регистрация</h3>
        <p className='popup__subtitle'>Поздравляем, вы успешно зарегистрировались и можете начать обучение.</p>
        <button className='popup__submit-button' onClick={() => onClose()} type='button'>Закрыть</button>
      </form>
    </Popup>
  )
}

export default SuccessPopup;
