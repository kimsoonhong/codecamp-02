import { SliderItem, Wrapper } from "./LayoutBanner.styles";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";

// import styled from "styled-components";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    speed: 2000,
    autoplaySpeed: 5000,
    autoplay: true,
    // autoplayspeed: 2000,
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

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no1.jpeg"
          />
        </div>
        <div>
          <SliderItem
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no2.jpeg"
          />
        </div>
        <div>
          <SliderItem
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no3.jpeg"
          />
        </div>
        <div>
          <SliderItem
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no4.jpeg"
          />
        </div>
      </Slider>
    </Wrapper>
  );
}
