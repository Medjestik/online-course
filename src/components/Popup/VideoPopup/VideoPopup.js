import React from 'react';
import './VideoPopup.css';
import Popup from '../Popup.js';

function VideoPopup({ link, isOpen, onClose, windowWidth }) {

  return (
    <Popup 
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className='popup__form' name='video-popup' noValidate>
        <div className="video-responsive">
          <iframe
            width={windowWidth > 700 ? '600' : '300'}
            height={windowWidth > 700 ? '420' : '200'}
            src={`https://www.youtube.com/embed/${link}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1`}
            frameBorder='0'
            allowFullScreen
            title="Embedded youtube"
            >
          </iframe>
        </div>
      </form>
    </Popup>
  )
}

export default VideoPopup;