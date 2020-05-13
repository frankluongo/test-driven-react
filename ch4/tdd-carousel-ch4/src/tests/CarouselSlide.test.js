import React from "react";
import { shallow } from "enzyme";
import CarouselSlide from "../CarouselSlide";

describe("<CarouselSlide />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarouselSlide />);
  });

  it("renders a <figure> tag", () => {
    expect(wrapper.type()).toBe("figure");
  });

  it("renders an <img> and a <figcaption> as children", () => {
    expect(wrapper.childAt(0).type()).toBe("img");
    expect(wrapper.childAt(1).type()).toBe("figcaption");
  });

  it("passes `imgUrl` through to the <img>", () => {
    const imgUrl = "https://example.com/image.png";
    wrapper.setProps({ imgUrl });
    const img = wrapper.find("img");
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
