import React from 'react';
import Carousel from 'react-elastic-carousel';
import './PhotoCarousel.css';

function PhotoCarousel({ items, windowWidth, onOpenVideo }) {

  const [slideCount, setSlideCount] = React.useState(0);

  function renderTag(tag) {
    switch(tag) {
  
      case 'content':
        return 'опорный конспект';

      case 'video':
        return 'видеолекция';

      case 'task':
        return 'практика';

      case 'timeline':
        return 'timeline';

      case 'panorama':
        return 'панорама 360';

      case 'map':
        return 'интерактивная карта';

      default:
        return tag;
    }
  }

  React.useEffect(() => {
    if (windowWidth < 1599) {
      if (windowWidth < 1023) {
        setSlideCount(1)
      } else {
        setSlideCount(2)
      }
    } else {
      setSlideCount(3)
    }

  }, [windowWidth])

  return (
    <div className='photo-carousel'>
      <Carousel
      itemsToShow={slideCount} 
      enableAutoPlay={true} 
      autoPlaySpeed={10000}
      >
        {items.map((item, i) => (
          <div className='photo-carousel__item' key={i}>
            <span className={`photo-carousel__tag photo-carousel__tag_type_${item.type}`}>{renderTag(item.type)}</span>
            <img className='photo-carousel__img' src={item.img} alt='screen'></img>
            {
              item.type !== 'content' &&
              <div className='photo-carousel__overlay'>
                <button className='photo-carousel__button' type='button' onClick={() => onOpenVideo(item.link)}></button>
              </div>
            }
          </div>
          ))}  
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;