import React from 'react';
import Carousel from 'react-elastic-carousel';
import './PhotoCarousel.css';

function PhotoCarousel({ items, windowWidth }) {

  const [slideCount, setSlideCount] = React.useState(0);

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
            <img className='photo-carousel__img' src={item} alt='screen'></img>
          </div>
          ))}  
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;