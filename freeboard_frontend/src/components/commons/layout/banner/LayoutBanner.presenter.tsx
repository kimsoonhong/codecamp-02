import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // <div className="App" style={{ backgroundColor: '#ccf2f4', height: '100vh', }}>

  return (
    <Wrapper>
      {/* <Slider {...settings}>
        <div>
          <SliderItem src="/images/layout/no_1.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/no_2.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/no_3.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/no_4.jpeg" />
        </div>
      </Slider> */}
    </Wrapper>
  );
}
