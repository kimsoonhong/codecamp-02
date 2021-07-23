import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// import styled from "styled-components";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
  };

  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  // <div className="App" style={{ backgroundColor: '#ccf2f4', height: '100vh', }}>

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem scrollY={scrollY} src="/images/layout/no_1.jpeg" />
        </div>
        <div>
          <SliderItem scrollY={scrollY} src="/images/layout/no_2.jpeg" />
        </div>
        <div>
          <SliderItem scrollY={scrollY} src="/images/layout/no_3.jpeg" />
        </div>
        <div>
          <SliderItem scrollY={scrollY} src="/images/layout/no_4.jpeg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
