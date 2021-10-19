import { css } from "@emotion/react";

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

  /* Global */

  :root {
    /* Color */
    --color-white: #ffffff;
    --color-light-white: #eeeeee;
    --color-dark-white: #bdbdbd;
    --color-blue: #142b12;
    --color-dark-blue: #2a653f;
    --color-dark-grey: #4d4d4d;
    --color-grey: #616161;
    --color-light-grey: #7c7979;
    --color-wood: #9e7c48;
    --color-yellow: #fff7d1;
    --color-orange: #feb546;
    --color-black: #000000;

    /* Font size */
    --font-large: 48px;
    --font-medium: 25px;
    --font-regular: 18px;
    --font-small: 16px;
    --font-micro: 14px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;

    /* size */
    --size-border-radius: 4px;

    /* animation */
    --animation-duration: all 250ms ease-in;
  }

  /* Universal tags */
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    font-family: "Open Sans", sans-serif;
    cursor: default;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
  }

  ul {
    padding-left: 0px;
    transform: none;
  }

  li {
    list-style: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Typography */

  h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: var(--color-black);
    margin: 16px 0px;
  }

  h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: var(--color-black);
    margin: 8px 0;
  }

  h3 {
    ont-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 8px 0;
  }

  p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 4px 0;
  }

  /* section common */
  .section {
    padding: 50px;
    text-align: center;
    margin: auto;
  }

  .section__container {
    max-width: 1200px;
  }

  /* Navbar */
  #navber {
    position: sticky;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    align-items: center;
    color: var(--color-white);
    padding: 4px 16px;
    background-color: var(--color-blue);

    transition: 350ms all ease-in-out;
  }

  #navber.navber--dark {
    background-color: var(--color-blue);
    padding: 8px;
    transition: all 200ms ease-in-out;
    z-index: 1;
  }

  .navbar__menu {
    display: flex;
    margin-top: 16px;
    /* background-color: var(--color-dark-grey); */
  }

  .navber__logo {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    padding-left: 50px;
    height: 40px;
    /* line-height: 50px; */
  }

  .navbar__menu__item {
    padding: 8px 12px;
    margin: 0px 4px;
    cursor: pointer;
    border: 1px solid transparent;
  }

  .navbar__menu__item:hover {
    background-color: var(--color-dark-blue);
    border: 1px solid var(--color-white);
    border-radius: var(--size-border-radius);
  }

  .navber_toggle-btn {
    position: absolute;
    right: 32px;
    font-size: 24px;
    color: var(--color-white);
    top: 24px;
    display: none;
  }

  /* home */

  #home {
    background: url("/images/gc/a.png") center/cover no-repeat;
    padding: 40px;
    text-align: center;
    padding-top: 120px;
  }

  .home__avatar {
    width: 250px;
    border-radius: 50%;
    border: 2px solid var(--color-light-white);
  }

  .home__title {
    color: var(--color-white);
    font-weight: 2000;
    font-size: 60px;
    font-family: "normal";
    src: url("/fonts/normal4.ttf");
  }
  .home__description {
    color: var(--color-white);
  }

  .home_contact {
    font-size: var(--font-regular);
    font-weight: var(--weight-bold);
    margin: 24px;
    padding: 8px 12px;
    border: 2px solid var(--color-white);
    border-radius: var(--size-border-radius);
    color: var(--color-white);
    /* background-color: var(--color-blue); */
  }

  .home_contact:hover {
    background-color: var(--color-dark-grey);
    transition: var(--animation-duration);
  }

  /* about */
  .about__career {
    display: flex;
    justify-content: space-between;
    margin: 80px 0px;
  }

  .aboutContent {
    font-size: 24px;
    font-family: "normal";
    src: url("/fonts/normal4.ttf");
  }
  .career {
    width: 30%;
  }

  .my-bell {
    transform-origin: top;
    animation: bell 3s infinite linear;
    :hover {
      animation: none;
    }
  }

  @keyframes bell {
    0%,
    2% {
      transform: rotate(0deg);
      ::hover {
        transform: none;
      }
    }
    1%,
    2%,
    4%,
    5%,
    6% {
      transform: rotate(1deg);
      :hover {
        transform: none;
      }
    }
    2%,
    3%,
    6%,
    50% {
      transform: rotate(-1deg);
      :hover {
        transform: none;
      }
    }
  }
  .secondBell {
    animation-delay: 0.7s;
  }

  .thirdBell {
    animation-delay: 0.3s;
  }

  .career__icon {
    width: 170px;
    height: 170px;
    font-size: 70px;
    line-height: 170px;
    margin: auto;
    border-radius: 50%;
  }

  .career__icon__ktl {
    width: 170px;
    height: 120px;
    font-size: 70px;
    line-height: 120px;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .career img:hover {
    transform: rotate(-5deg) scale(1.1) !important;
  }

  .career img {
    transition: all 250ms ease;
  }

  .career__title,
  .career__description {
    color: var(--color-dark-grey);
  }

  .career__description {
    font-size: 16px;
    background-color: var(--color-light-white);
    width: 360px;
    padding: 24px;
    border-radius: 20px;
    border: 2px gray solid;
  }

  .jop {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 4px 0px;
  }

  .jop__period {
    font-size: 18px;
    color: var(--color-light-grey);
    font-family: "normal";
    src: url("/fonts/normal4.ttf");
  }

  /* skill */

  #skills {
    background-color: var(--color-yellow);
  }

  .section__container {
    margin: auto;
  }

  .skillset {
    display: flex;
    background-color: var(--color-dark-grey);
    color: var(--color-light-white);
    margin: 20px 0;
  }

  .skillset__title {
    color: var(--color-orange);
    font-size: var(--font-medium);
    margin-bottom: 24px;
    height: 80px;
  }

  .skillset__language {
    flex-basis: 25%;
    background-color: var(--color-dark-grey);
    padding: 20px 40px;
  }

  .skillset__FrameworkLibrary {
    flex-basis: 25%;
    padding: 20px 40px;
    background-color: var(--color-grey);
  }
  .skillset__network {
    flex-basis: 25%;
    background-color: var(--color-dark-grey);
    padding: 20px 40px;
  }
  .skillset__general {
    flex-basis: 25%;
    background-color: var(--color-grey);
    padding: 20px 40px;
  }

  .skill__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sktll_item {
    font-size: var(--font-regular);
    color: var(--color-white);
    width: 100%;
    margin-bottom: 20px;
  }

  /* work */

  .work__categories {
    margin: 40px;
  }

  .category__btn {
    border: 1px solid var(--color-dark-white);
    border-radius: var(--size-border-radius);
    font-size: var(--font-regular);
    padding: 8px 48px;
    text-align: center;
  }

  .category__btn.selected,
  .category__btn:hover {
    background-color: var(--color-blue);
    color: var(--color-white);
    transition: var(--animation-duration);
  }

  .category__btn.selected .category__count,
  .category__btn:hover .category__count {
    opacity: 1;
    background-color: var(--color-orange);
    top: 0px;
  }

  .category__count {
    border-radius: 50%;
    color: var(--color-white);
    width: 24px;
    height: 24px;
    display: inline-block;
    line-height: 24px;
    position: relative;
    top: -20px;
    left: 8px;
    opacity: 0;
    background-color: rebeccapurple;
    transition: all ease-in 250ms;
  }

  .work__projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 1;
    transition: all 250ms ease-out;
  }

  .work__projects.anim-out {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }

  .project {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 250px;
    position: relative;
    margin: 2px;
    background-color: var(--color-light-white);
  }

  .project.invisible {
    display: none;
  }

  .project__img {
    max-width: 100%;
    max-height: 100%;
  }

  .project__description {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transform: translateY(10px);
    transition: all ease-in 200ms;
  }

  .project__description:hover.project__description {
    opacity: 0.8;
    transform: translateY(0px);
  }

  .project__description h3 {
    color: var(--color-orange);
  }

  .project__description h3:after {
    content: "";
    display: block;
    position: relative;
    left: 50%;
    width: 50px;
    height: 2px;
    margin-top: 8px;
    background-color: var(--color-dark-white);
    margin-left: -12px;
    transform: translateX(-25%);
  }

  .project__Enter {
    cursor: pointer;
    background-color: #2a653f;
    width: 120px;
    height: 52px;
    line-height: 48px;

    font-size: 24px;
    font-weight: var(--weight-bold);
    margin: auto;

    border: 2px solid var(--color-white);
    border-radius: var(--size-border-radius);
    color: var(--color-white);
    font-family: "normal";
    src: url("/fonts/normal4.ttf");
  }

  /* testimonial */

  /* contact */
  #contact {
    background-color: var(--color-blue);
  }

  .contact__title,
  .contack__emil,
  .contact__rights {
    color: var(--color-white);
  }

  .contact__title {
    margin: 32px 0;
  }

  .contact__links {
    font-size: var(--font-large);
    margin: 24px 0;
  }

  .contact__links i:hover {
    transform: scale(1.1);
    color: var(--color-yellow);
    transition: 250ms;
  }

  /* scroll */
  .arrow_up {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 67px;
    height: 67px;
    font-size: 50px;
    background-color: var(--color-dark-blue);
    border-radius: 50%;
    color: white;
    border: 3px solid var(--color-blue);
    /* display: none; */
    opacity: 0;
    transition: ease-in 350ms all;
    pointer-events: none;
  }

  .arrow_up.visible {
    /* display: block; */
    opacity: 1;
    transition: ease-in 150ms all;
    pointer-events: auto;
  }

  @media screen and (max-width: 768px) {
    :root {
      /* Color */
      --color-white: #ffffff;
      --color-light-white: #eeeeee;
      --color-dark-white: #bdbdbd;
      --color-blue: #789ff3;
      --color-dark-blue: #6d8fff;
      --color-dark-grey: #4d4d4d;
      --color-grey: #616161;
      --color-light-grey: #7c7979;
      --color-wood: #9e7c48;
      --color-yellow: #fff7d1;
      --color-orange: #feb546;
      --color-black: #000000;

      /* Font size */
      --font-large: 25px;
      --font-medium: 15px;
      --font-regular: 14px;
      --font-small: 12px;
      --font-micro: 4px;

      /* Font weight */
      --weight-bold: 700;
      --weight-semi-bold: 600;
      --weight-regular: 400;

      /* size */
      --size-border-radius: 4px;

      /* animation */
      --animation-duration: all 250ms ease-in;
    }

    a {
      text-decoration: none;
      color: var(--color-white);
      font-size: 20px;
    }

    ul {
      padding-left: 0px;
    }

    li {
      list-style: none;
    }

    button {
      background-color: transparent;
      cursor: pointer;
      border: none;
      outline: none;
    }

    /* Typography */

    h1 {
      font-size: var(--font-large);
      font-weight: var(--weight-bold);
      color: var(--color-black);
      margin: 16px 0px;
      /* font-size: 25px; */
    }

    h2 {
      font-size: var(--font-medium);
      font-weight: var(--weight-semi-bold);
      color: var(--color-black);
      margin: 8px 0;
      /* font-size: 15px; */
    }

    h3 {
      ont-size: var(--font-regular);
      font-weight: var(--weight-regular);
      color: var(--color-black);
      margin: 8px 0;
    }

    p {
      font-size: var(--font-regular);
      font-weight: var(--weight-regular);
      color: var(--color-black);
      margin: 4px 0;
    }

    .navber_toggle-btn {
      display: block;
      transform: translateY(-7px);
    }

    #navber {
      flex-direction: column;
      align-items: flex-start;
      background-color: var(--color-blue);
      position: fixed;
      /* padding: 0; */
    }

    #navber.navber--dark {
      padding: 16px;
    }
    /* 
	#navber {
		position: fixed;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: transparent;
		align-items: center;
		color: var(--color-white);

		transition: 350ms all ease-in-out;
	}

	#navber.navber--dark {
		background-color: var(--color-blue);
		padding: 8px;
		transition: all 200ms ease-in-out;
		z-index: 1;
	} */

    .navber__logo {
      /* display: flex; */
      height: 30px;
    }

    .navbar__menu {
      flex-direction: column;
      text-align: center;
      width: 100%;
      display: none;
    }

    .navbar__menu.open {
      display: block;
    }
    .career__title {
      font-size: var(--font-medium);
      font-weight: var(--weight-bold);
    }

    .jop__name {
      font-size: var(--font-medium);
      font-weight: var(--weight-bold);
    }

    .about__career {
      flex-direction: column;
      margin: 0px;
      margin-top: 80px;
    }

    .career {
      margin-bottom: 38px;
      width: 100%;
    }
    .skillset {
      flex-direction: column;
    }
    .skillset__title {
      color: var(--color-orange);
      font-size: var(--font-large);
      margin-bottom: 24px;
      height: 40px;
    }

    .sktll_item {
      font-size: var(--font-regular);
      color: var(--color-white);
      width: 100%;
      margin-top: 20px;
      margin-bottom: 0px;
    }

    .project {
      flex-grow: 1;
    }

    .testimonial__avatar {
      width: 100px;
      height: 100px;
    }

    .project__description {
      opacity: 0.7;
      transform: translateY(0px);
    }

    #contact {
      background-color: var(--color-blue);
      padding: 20px;
    }

    .contact__title,
    .contack__emil,
    .contact__rights {
      color: var(--color-white);
    }

    .contact__title {
      margin: 0;
    }

    .contact__links {
      font-size: var(--font-large);
      margin: 0;
    }

    .contact__links i:hover {
      transform: scale(1.1);
      color: var(--color-yellow);
      transition: 250ms;
    }
    .arrow_up {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      font-size: 20px;
      background-color: var(--color-dark-blue);
      border-radius: 50%;
      color: white;
      border: 3px solid var(--color-blue);
      /* display: none; */
      opacity: 0;
      transition: ease-in 350ms all;
      pointer-events: none;
    }
  }
`;
