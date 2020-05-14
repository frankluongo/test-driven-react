import React from "react";
import CarouselButton from "./CarouselButton";
import CarouselSlide from "./CarouselSlide";

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  };

  static defaultProps = {
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
  };

  handleClick(value) {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + slides.length + value) % slides.length,
    }));
  }

  render() {
    const { defaultImgHeight, slides, ...rest } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide
          {...slides[this.state.slideIndex]}
          imgHeight={defaultImgHeight}
        />
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
