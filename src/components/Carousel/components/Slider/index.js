import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left:0;
    transform:translateX(-100%)
  }
  .slick-next {
    right:0;
    transform:translateX(100%);
    /* position:relative; */
    &:after{
      content:'';
      transform:translate(-100% ,-58%);
      
      height:200px;
      width:30px;
      display:block;
      overflow:visible;
      background: linear-gradient(to left, #141414 10%, transparent 100%);
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  /* img {
    margin: 20px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  } */
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
