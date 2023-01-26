import React from 'react';
import './InfoPopup.css';
import Popup from '../Popup.js';

function InfoPopup({ currentProgram, isOpen, onClose }) {

  return (
    <Popup 
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className='popup__form' name='program-info-popup' noValidate>
        <h3 className='popup__title'>{currentProgram.name}</h3>
        <p className='popup__subtitle'>{currentProgram.description}</p>
        {
          /*
          <>
            <div className='programs__link-container'>
              <a className='programs__link' href={currentProgram.link} target='_blank' rel='noreferrer'>Зарегистрироваться на программу</a>
            </div>
          </>
          */
        }
      </form>
    </Popup>
  )
}

export default InfoPopup;
