import React from "react";
import { shallow, mount } from "enzyme";
import CarouselSlide from "../CarouselSlide";

describe("<Img />", () => {
  let mounted;
  const imgUrl = "https://example.com/default.jpg";
  beforeEach(() => {
    const Img = CarouselSlide.defaultProps.Img;
    mounted = mount(<Img src={imgUrl} imgHeight={500} />);
  });
  it("renders an <img> with the given `src`", () => {
    expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
  });
  it("has the expected static styles", () => {
    expect(mounted).toHaveStyleRule("width", "100%");
    expect(mounted).toHaveStyleRule("object-fit", "cover");
  });
  it("uses imgHeight as the height style property", () => {
    const customHeight = "calc(100vh - 100px)";
    expect(mounted).toHaveStyleRule("height", "500px");
    mounted.setProps({ imgHeight: customHeight });
    expect(mounted).toHaveStyleRule("height", customHeight);
  });
});

describe("<CarouselSlide />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarouselSlide />);
  });

  it("renders a <figure> tag", () => {
    expect(wrapper.type()).toBe("figure");
  });

  it("renders a props.Img and a <figcaption> as children", () => {
    expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img);
    expect(wrapper.childAt(1).type()).toBe("figcaption");
  });

  it("passes `imgUrl` through to the <img>", () => {
    const imgUrl = "https://example.com/image.png";
    wrapper.setProps({ imgUrl });
    const img = wrapper.find(CarouselSlide.defaultProps.Img);
    expect(img.prop("src")).toBe(imgUrl);
  });

  it("passes a `description` and `attribution` into the <figcaption>", () => {
    const description = "A jaw-droppingly spectacular image";
    const attribution = "Trevor Burnham";
    wrapper.setProps({ description, attribution });
    expect(wrapper.find("figcaption").text()).toBe(
      `${description}${attribution}`
    );
    expect(wrapper.find("figcaption strong").text()).toBe(description);
  });

  it("passes any other props to the <figure>", () => {
    const style = {};
    const onClick = () => {};
    const className = "my-slide";
    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop("style")).toBe(style);
    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
  });
});
