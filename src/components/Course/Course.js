import React from 'react';
import './Course.css';
import { courses } from '../../utils/courses.js';
import Tag from '../Tag/Tag.js';

function Course({ openCourse }) {

  return (
    <section className='container course ' id='course'>

      <h2 className='course__title'>Online-курсы для&nbsp;студентов</h2>

      <ul className='course__list'>
        {
          courses.map((elem) => (
            <li className='course__item' key={elem.id}>
              <div className='course__top'>
                <img className='course__img' src={elem.img} alt={elem.id}></img>
                <span className='course__hours'>{elem.hours} ч.</span>
              </div>
              <div className='course__bottom'>
                <ul className='course__tags'>
                  <Tag tags={elem.tags} />
                </ul>
                <h4 className='course__name'>{elem.name}</h4>
                <p className='course__description'>{elem.description}</p>
                <span onClick={(() => openCourse(elem))} className='course__more'>Подробнее &#8594;</span>
              </div>
            </li>
          ))
        }
        </ul>
          
    </section>
  );
}

export default Course; 
