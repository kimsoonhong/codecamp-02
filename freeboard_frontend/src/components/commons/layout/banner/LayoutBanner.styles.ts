import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* height: 400px; */
  /* margin-top: 100px; */
  display: block;
  padding-top: 100px;
  height: auto;
  width: 100%;
  margin-bottom: 34px;
  /* z-index: 1; */
`;

export const SliderItem = styled.img`
  width: 100%;
  /* margin: auto; */
  height: 400px;
  opacity: ${(props) => 1.2 - props.scrollY / 430};
  /* background-size: cover; */
  /* background-position-y: 1000px; */
  /* overflow: hidden; */
  object-fit: none;
  object-position: ${(props) => props.scrollY / 50}%;
`;

// export const Slider = styled(slider)`
//   display: block;
//   padding-top: 500px;
// `;
