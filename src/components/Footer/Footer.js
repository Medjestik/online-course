import React from 'react';
import './Footer.css';
import footerLogo from '../../images/logo.svg';
import { Link } from 'react-scroll';

function Footer({ windowWidth, isShowNavigation }) {
  return (
    <>
    {

      <footer className='container footer' id='contacts'>
        <div className='footer__container'>
          <img className='footer__logo' src={footerLogo} alt='логотип'></img>

          {
            isShowNavigation &&
            <div className='footer__column'>
              <h4 className='footer__title'>Навигация</h4>
              <Link className='footer__link' to='main' smooth={true} offset={0} duration= {1000}>главная</Link>
              <Link className='footer__link' to='course' smooth={true} offset={40} duration= {500}>online-курсы</Link>
            </div>
          }
          
          <div className='footer__column'>
            <h4 className='footer__title'>Контакты</h4>
            <p className='footer__link'>+7 (495) 374-75-27</p>
            <p className='footer__link'>admin@emiit.ru</p>
          </div>
          <div className='footer__column footer__column_type_large'>
            <h4 className='footer__title'>Ресурсы</h4>
            <a className='footer__link' href='https://miit-ief.ru/' target='_blank' rel='noreferrer'>институт экономики и финансов</a>
            <a className='footer__link' href='https://www.miit.ru/' target='_blank' rel='noreferrer'>РУТ (МИИТ)</a>
          </div>
        </div>
        <p className='footer__copy'>&copy; 2022 "Российский университет транспорта"</p>
      </footer>
    }
    </>
  );
}

export default Footer; 