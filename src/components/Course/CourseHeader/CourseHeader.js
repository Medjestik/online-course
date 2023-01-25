import React from 'react';
import './CourseHeader.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import logoColor from '../../../images/logo-color.svg';

function CourseHeader() {

  const navigate = useNavigate();

  const isColoredHeader = true;

  function backToHomePage() {
    navigate(-1);
  }

  return (
    <header className={`container header ${isColoredHeader ? 'header_type_color' : ''} header_type_course`}>
      <img className='header__logo' src={isColoredHeader ? logoColor : logo} alt='логотипы'></img>
      <button className='header__btn_type_back' type='button' onClick={backToHomePage}>назад</button>
        
    </header>
  );
}

export default CourseHeader; 
