import React from 'react';
import './Main.css';
import { Link } from 'react-scroll';

function Main({ windowWidth, onOpenRegistration }) {
  return (
    <main className='container main' id='main'>
      <p className='main__subtitle'>online-курсы для&nbsp;студентов</p>
      <h1 className='main__title'>Высшее образование</h1>
      <a className='main__button main__button_type_enter' href='https://edu.emiit.ru/' target='_blank' rel='noreferrer'>Вход на обучение</a>
      <div className='main__button-container'>
        <button onClick={onOpenRegistration} className='main__button-register main__button-register_type_individual' type='button'>Индивидуальная регистрация</button>
        <button className='main__button-register main__button-register_type_group' type='button'>Групповая регистрация</button>
      </div>
      <Link className='main__arrow' to='course' smooth={true} offset={40} duration={500}></Link>
    </main>
  );
}

export default Main;