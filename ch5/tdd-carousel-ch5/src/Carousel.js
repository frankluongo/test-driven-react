import React from "react";
import CarouselButton from "./CarouselButton";
import CarouselSlide from "./CarouselSlide";

import HasIndex from "./HasIndex";
import AutoAdvances from "./AutoAdvances";

export const Carousel = (props) => {
  const {
    defaultImg,
    defaultImgHeight,
    slides,
    slideIndex,
    slideIndexDecrement: _slideIndexDecrement,
    slideIndexIncrement: _slideIndexIncrement,
    ...rest
  } = props;

  return (
    <div {...rest}>
      <CarouselSlide
        Img={defaultImg}
        imgHeight={defaultImgHeight}
        {...slides[slideIndex]}
      />
      <CarouselButton
        data-action="prev"
        onClick={_slideIndexDecrement.bind(null, slides.length)}
      >
        Prev
      </CarouselButton>
      <CarouselButton
        data-action="next"
        onClick={_slideIndexIncrement.bind(null, slides.length)}
      >
        Next
      </CarouselButton>
    </div>
  );
};

Carousel.defaultProps = {
  defaultImg: CarouselSlide.defaultProps.Img,
  defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
};

export default HasIndex(
  AutoAdvances(Carousel, "slideIndex", "slides"),
  "slideIndex"
);
