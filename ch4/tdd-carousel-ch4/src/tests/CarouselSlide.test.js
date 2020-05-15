import React from "react";
import { shallow, mount } from "enzyme";
import CarouselSlide from "../CarouselSlide";
import styled from "styled-components";

describe("<Img />", () => {
  let mounted;
  const imgUrl = "https://example.com/default.jpg";
  beforeEach(() => {
    const Img = CarouselSlide.defaultProps.Img;
    mounted = mount(<Img src={imgUrl} imgHeight={500} />);
  });
  it("renders correctly", () => {
    expect(mounted.find("img")).toMatchSnapshot();
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
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default.jpg"
        description="Default Test Description"
      />
    );
  });

  it("renders correctly", () => {
    wrapper.setProps({
      description: "Description",
      attribution: "Attribution",
    });
    expect(wrapper).toMatchSnapshot();
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
