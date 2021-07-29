import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  * {
    margin: 0px;
    /* color: #142b12; */
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
      outline: none;
    }
    input,
    textarea,
    button {
      padding: 0;
    }
    button {
      display: inline-block;
      font-family: inherit;
      vertical-align: middle;
      cursor: pointer;
      white-space: nowrap;
      text-decoration: none;
      background: transparent;
      border: none;
      outline: 0;
    }
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
