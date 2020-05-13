import React from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  };

  handleClick(value) {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + slides.length + value) % slides.length,
    }));
  }

  render() {
    const { slides, ...rest } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide {...slides[this.state.slideIndex]} />
        <CarouselButton
          data-action="prev"
          onClick={this.handleClick.bind(this, -1)}
        >
          Prev
        </CarouselButton>
        <CarouselButton
          data-action="next"
          onClick={this.handleClick.bind(this, 1)}
        >
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default Carousel;

/*

As much as I'd like to not use Component,
this testing booklet relies heavily on it

import React, { useState } from 'react';
import CarouselButton from './CarouselButton';

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div>
      <div data-index>{slideIndex}</div>
      <CarouselButton
        data-action="prev"
        onClick={handleBtnClick.bind(null, -1)}
      >
        Prev
      </CarouselButton>
      <CarouselButton data-action="next" onClick={handleBtnClick.bind(null, 1)}>
        Next
      </CarouselButton>
    </div>
  );

  function handleBtnClick(value) {
    setSlideIndex((prevState) => prevState + value);
  }
};

export default Carousel;
*/
