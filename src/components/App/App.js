import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PageOverlay from '../PageOverlay/PageOverlay.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Course from '../Course/Course.js';
import CourseItem from '../Course/CourseItem/CourseItem.js';
import Footer from '../Footer/Footer.js';

import { courses } from '../../utils/courses.js';

function App() {

  console.log(courses);

  const [windowWidth, setWindowWidth] = React.useState(0);
  const navigate = useNavigate();

  function openCourse(course) {
    navigate('/course/' + course.id);
    window.scrollTo(0, 0);
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
          <Main windowWidth={windowWidth} />
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

    </div>
  );
}

export default App; 
