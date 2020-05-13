import React from 'react';

const CarouselSlide = ({ attribution, description, imgUrl, ...rest }) => {
  return (
    <figure {...rest}>
      <img src={imgUrl} />
      <figcaption>
        <strong>{description}</strong>
        {attribution}
      </figcaption>
    </figure>
  );
};

export default CarouselSlide;
