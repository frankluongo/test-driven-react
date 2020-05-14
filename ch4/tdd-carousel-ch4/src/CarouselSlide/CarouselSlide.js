import React from "react";

import { Img } from "./CarouselSlideStyles";

const CarouselSlide = ({
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
  imgHeight: 500,
};

export default CarouselSlide;
