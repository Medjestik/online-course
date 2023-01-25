import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import logoColor from '../../images/logo-color.svg';
import { Link } from 'react-scroll';

function Header({ windowWidth }) {

  const [isColoredHeader, setIsColoredHeader] = React.useState(false);

  React.useEffect(() => {
    function scrollPage() {
      if (window.pageYOffset > (window.innerHeight - 20)) {
        setIsColoredHeader(true);
      } else {
        setIsColoredHeader(false);
      }
    }
    window.addEventListener('scroll', scrollPage);
    return () => {
      window.removeEventListener('scroll', scrollPage);
    }
  }, []);

  return (
      <header className={`container header ${isColoredHeader ? 'header_type_color' : ''}`}>

        <img className='header__logo' src={isColoredHeader ? logoColor : logo} alt='логотипы'></img>

        {
        windowWidth > 1023 &&
        <>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link activeClass='nav__link_type_active' className={`nav__link ${isColoredHeader ? 'nav__link_type_color' : ''}`} to='main' smooth={true} offset={-40} duration= {500} spy={true}>главная</Link>
              <div className={`nav__link-round ${isColoredHeader ? 'nav__link-round_type_color' : ''}`}></div>
            </li>
            <li className='nav__item'>
              <Link activeClass='nav__link_type_active' className={`nav__link ${isColoredHeader ? 'nav__link_type_color' : ''}`} to='course' smooth={true} offset={40} duration= {1000} spy={true}>online-курсы</Link>
              <div className={`nav__link-round ${isColoredHeader ? 'nav__link-round_type_color' : ''}`}></div>
            </li>
          </ul>
        </nav>
        {
          /*
          <a className={`header__btn-enter ${isColoredHeader ? 'header__btn-enter_type_color' : ''}`} href='https://dpo.emiit.ru/' target='_blank' rel='noreferrer'>вход</a>
          */
        }
        </>
        }
 
      </header>
  );
}

export default Header; 