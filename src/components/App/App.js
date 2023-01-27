import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as api from '../../utils/api.js';
import PageOverlay from '../PageOverlay/PageOverlay.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Course from '../Course/Course.js';
import CourseItem from '../Course/CourseItem/CourseItem.js';
import Footer from '../Footer/Footer.js';
import RegistrationPopup from '../Popup/RegistrationPopup/RegistrationPopup.js';
import SuccessPopup from '../Popup/SuccessPopup/SuccessPopup.js';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(0);
  const navigate = useNavigate();

  const [isOpenRegistrationPopup, setIsOpenRegistrationPopup] = React.useState(false);
  const [isOpenSuccessPopup, setIsOpenSuccessPopup] = React.useState(false);

  const [isLoadingRequest, setIsLoadingRequest] = React.useState(false);
  
  function openRegistrationPopup() {
    setIsOpenRegistrationPopup(true);
  }

  function openSuccessPopup() {
    setIsOpenSuccessPopup(true);
  }

  function closeRegistrationPopup() {
    setIsOpenRegistrationPopup(false);
  }

  function closeSuccessPopup() {
    setIsOpenSuccessPopup(false);
  }

  function openCourse(course) {
    navigate('/course/' + course.id);
    window.scrollTo(0, 0);
  }

  function registrationUser(user) {
    setIsLoadingRequest(true);
    api.registration(user)
      .then((res) => {
        closeRegistrationPopup();
        openSuccessPopup();
      })
      .catch((err) => {
        console.log(err);
        //setRequestError(true);
      })
      .finally(() => {
        setIsLoadingRequest(false);
      });
  }

  React.useEffect(() => {
    function resizeWindow (evt) {
      setWindowWidth(evt.target.innerWidth);
    }
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, []);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  return (
    <div className='page'>
      <Routes>
        
        <Route exact path='/' element={
          <>
          <PageOverlay />
          <Header windowWidth={windowWidth} />
          <Main windowWidth={windowWidth} onOpenRegistration={openRegistrationPopup} />
          <div className='page__container'>
            <Course openCourse={openCourse} />
            <Footer windowWidth={windowWidth} isShowNavigation={true} />
          </div>
          </>
        }/>

        <Route exact path='/course/:courseId/*' element={
          <CourseItem windowWidth={windowWidth} />
        }/>

      </Routes>

      {
      <RegistrationPopup 
        isOpen={isOpenRegistrationPopup}
        onClose={closeRegistrationPopup}
        onRegistration={registrationUser}
        isLoadingRequest={isLoadingRequest}
      />
      }

      {
        <SuccessPopup
          isOpen={isOpenSuccessPopup}
          onClose={closeSuccessPopup}
        />
      }

    </div>
  );
}

export default App; 
