import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* height: 400px; */
  /* margin-top: 100px; */
  display: block;
  height: auto;
  width: 100%;
  margin-bottom: 34px;
  /* z-index: 1; */
`;

export const SliderItem = styled.img`
  width: 100%;
  margin: auto;

  height: 500px;

  opacity: ${(props) => 1 - props.scrollY / 430};
`;

// export const Slider = styled(slider)`
//   display: block;
//   padding-top: 500px;
// `;
