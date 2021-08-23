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

  // <div className="App" style={{ backgroundColor: '#ccf2f4', height: '100vh', }}>

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem
            // style={{ backgroundPositionY: scrollY / 20 }}
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no_3.jpg"
          />
        </div>
        <div>
          <SliderItem
            // style={{ backgroundPositionY: scrollY / 20 }}
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no_2.jpg"
          />
        </div>
        <div>
          <SliderItem
            style={
              {
                // backgroundImage:url("/images/layout/no_3.jpg"),
                // backgroundPositionY: scrollY / -200,
              }
            }
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no_1.jpg"
          />
        </div>
        <div>
          <SliderItem
            // style={{ backgroundPositionY: scrollY / 20 }}
            // @ts-ignore
            scrollY={scrollY}
            src="/images/layout/no_4.jpg"
          />
        </div>
      </Slider>
    </Wrapper>
  );
}
