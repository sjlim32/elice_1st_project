import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: black;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: black;

    li button:before {
      color: black;
    }

    li.slick-active button:before {
      color: white;
    }
  }

  margin-top: 50px;
  margin-bottom: 100px;
`;

const SubCardBox = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 0px 0 17.5vh;
  text-align: center;
  border-radius: 25px;
  float: left;
  background: rgba(153, 164, 151, 1);
`;

const ItemImg = styled.img`
  width: 300px;
  height: 230px;
  border-radius: 25px 25px 0 0;
`;

function SubCarousel() {
    const navigate = useNavigate();

  const moveHandler = () =>{
    navigate('/product/63e4879faf48818c1d5cc9e3');
  }

  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <div>
        <SubCardBox>
            <ItemImg alt="SliderItem1" src="/image/1.png" />
            <p>그레이니 레더 미니 TB 파우치&nbsp;&nbsp;&nbsp;&nbsp;1,500,000 KRW</p>
          </SubCardBox>
          <SubCardBox>
            <ItemImg alt="SliderItem1" src="/image/2.png" />
            <p>스말토 보석 목걸이&nbsp;&nbsp;&nbsp;&nbsp;1,110,000 KRW</p>
          </SubCardBox>
          <SubCardBox>
            <ItemImg alt="SliderItem1" src="/image/3.png" />
            <p>모노그램 모티브 레더 미디엄 토트&nbsp;&nbsp;&nbsp;&nbsp;410,000 KRW</p>
          </SubCardBox>
        </div>
        <div>
        <SubCardBox>
          <ItemImg alt="SliderItem" src="/image/4.png" onClick={moveHandler} />
          <p>모 헤어 울 팬츠&nbsp;&nbsp;&nbsp;&nbsp;765,000 KRW</p>
        </SubCardBox>
          <SubCardBox>
            <ItemImg alt="SliderItem2" src="/image/5.png" />
            <p>숄더 스트랩 토트 백&nbsp;&nbsp;&nbsp;&nbsp;4,300,000 KRW</p>
          </SubCardBox>
          <SubCardBox>
            <ItemImg alt="SliderItem2" src="/image/6.png" />
            <p>로고 프린트 코튼 티셔츠&nbsp;&nbsp;&nbsp;&nbsp;130,000 KRW</p>
          </SubCardBox>
        </div>
      </StyledSlider>
    </div>
  );
}

export default SubCarousel;
