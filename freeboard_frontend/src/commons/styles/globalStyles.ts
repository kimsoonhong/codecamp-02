import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  * {
    margin: 0px;
    color: #142b12;
  }

  @font-face {
    font-family: "normal";
    src: url("/fonts/normal4.ttf");
  }

  @font-face {
    font-family: "live";
    src: url("/fonts/header.ttf");
  }
`;

export const B_img = styled.div`
  /* background-image: url("/images/globalcomponent/background.jpeg"); */
  background-color: blue;
`;
