import styled from "styled-components";

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${getImageHeight};
`;

function getImageHeight(props) {
  if (typeof props.imgHeight === "number") {
    return `${props.imgHeight}px`;
  } else {
    return props.imgHeight;
  }
}
