import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: false,
    // 슬라이드의 인덱스를 나타내는 동그라미를 표시합니다.
    infinite: false,
    // 슬라이드가 끝에 도달하면 처음으로 돌아가는 무한 루프를 활성화합니다.
    // speed: 500,
    //  슬라이드가 바뀌는 속도를 밀리초(ms) 단위로 정의합니다.
    slidesToShow: 1,
    // 화면에 보여질 슬라이드의 개수를 정의합니다.
    slidesToScroll: 1,
    // 한 번에 스크롤될 슬라이드의 개수를 정의합니다.
    arrows: true,
    // 슬라이드를 이동시키기 위한 화살표를 표시합니다.
    prevArrow: (
      <button type="button" class="slick-prev">
        Previous
      </button>
    ),
    // 이전 화살표를 사용자 정의할 수 있습니다.
    nextArrow: (
      <button type="button" class="slick-next">
        Next
      </button>
    ),
    // 다음 화살표를 사용자 정의할 수 있습니다.
    afterChange: (index) => setCurrentSlide(index),
  }

  const images = [
    '/images/home/hotel1.jpg',
    '/images/home/hotel2.jpg',
    '/images/home/hotel3.jpg',
    '/images/home/hotel4.jpg',
  ]

  return (
    <LargeImage>
      <SelectedImage src={images[currentSlide]} alt={`slide ${currentSlide}`} />
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`slide ${index}`} />
        ))}
      </Slider>
    </LargeImage>
  )
}

export default ProductSlider

// 라지 이미지를 싼 껍데기를 싼 껍데기
const LargeImage = styled.div`
  width: 500px;
  height: 350px;
`

// 라지 이미지
const SelectedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Slide = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
  border: 1px solid red;
`
