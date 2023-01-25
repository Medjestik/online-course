import React from 'react';
import './CourseItem.css';
import { useParams } from 'react-router-dom';
import { courses } from '../../../utils/courses.js';
import CourseHeader from '../CourseHeader/CourseHeader.js';
import Footer from '../../Footer/Footer.js';
import Tag from '../../Tag/Tag.js';
import PhotoCarousel from '../../PhotoCarousel/PhotoCarousel.js';


function CourseItem({ windowWidth }) {

  const [currentCourse, setCurrentCourse] = React.useState({});
  const [isLoadingPage, setIsLoadingPage] = React.useState(true);

  const { courseId } = useParams();

  React.useEffect(() => {
    setCurrentCourse(courses.find((elem) => elem.id === courseId));
    setIsLoadingPage(false);
    return(() => {
      setCurrentCourse({});
    })
  }, [courseId]);

  return (
    <div className='course-item' id='course-item'>
      {
        isLoadingPage 
        ?
        <div></div>
        :
        <>
        <CourseHeader />

        <div className='course-item__container'>

          <div className='course-item__row'>
            <section className='course-item__section'>
              <div className='course-item__info'>
                <span className='course-item__title'>Online-курс</span>
                <h2 className='course-item__name'>«{currentCourse.name}»</h2>
                <div className='course-item__tags'>
                  <span className='course-item__hours'>{currentCourse.hours} ч.</span>
                  <Tag tags={currentCourse.tags} />
                </div>
              </div>
            </section>
            <div className='course-item__img-container'>
              <img className='course-item__img' src={currentCourse.img} alt={currentCourse.id}></img>
            </div>
          </div>

          <div className='course-item__row'>
            <section className='course-item__section course-item__section_type_authors course-item__section_margin_right'>
              <h4 className='course-item__section-title'>Авторы курса</h4>
              <ul className='course-item__authors'>
                {
                  currentCourse.authors.map((elem, i) => (
                    <li className={`course-item__author ${currentCourse.authors.length > 2 ? '' : 'course-item__author_width_large'}`} key={i}>
                      <div className='course-item__author-img-container'>
                        <img className='course-item__author-img' src={elem.img || ''} alt=' '></img>
                      </div>
                      <div className='course-item__author-info'>
                        <h6 className={`course-item__author-name ${currentCourse.authors.length > 2 ? '' : 'course-item__author-name_width_large'}`}>{elem.name}</h6>
                        <p className={`course-item__author-degree ${currentCourse.authors.length > 2 ? '' : 'course-item__author-degree_width_large'}`}>{elem.degree}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </section>
            <section className='course-item__section course-item__section_type_annotation'>
              <h4 className='course-item__section-title'>Аннотация</h4>
              <p className='course-item__section-text'>{currentCourse.description}</p>
              <p className='course-item__section-text'>{currentCourse.annotation}</p>
            </section>
          </div>

          <div className='course-item__row'>
            <section className='course-item__section course-item__section_type_screens'>
              <h4 className='course-item__section-title'>Материалы</h4>
              <PhotoCarousel items={currentCourse.screens} windowWidth={windowWidth} />
            </section>

          </div>

        </div>

        <Footer windowWidth={windowWidth} isShowNavigation={false} />
        </>
      }

      

    </div>
  );
}

export default CourseItem; 
