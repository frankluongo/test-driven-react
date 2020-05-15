import React from "react";

import { Img as DefaultImg } from "./CarouselSlideStyles";

const CarouselSlide = ({
  Img,
  attribution,
  description,
  imgHeight,
  imgUrl,
  ...rest
}) => {
  return (
    <figure {...rest}>
      <Img src={imgUrl} imgHeight={imgHeight} />
      <figcaption>
        <strong>{description}</strong>
        {attribution}
      </figcaption>
    </figure>
  );
};

CarouselSlide.defaultProps = {
  Img: DefaultImg,
  imgHeight: 500,
};

export default CarouselSlide;
