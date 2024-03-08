import React from 'react';
import { CardSliderWrapper } from './CommonCard.styles';
import Slider from 'react-slick';
import Image from 'next/image';
import bgImg from '@/assets/images/house-demo.jpg';
import Icon from '@ant-design/icons';
import RightArrow from '@/assets/images/icons/RightArrowSvg';
import leftArrow from '@/assets/images/icons/LeftArrowSvg';
import noProperty from '@/assets/images/noProperty.png';

const CardSlider = ({ propertyImage }: any) => {
  const settings = {
    dots: true,

    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <span className='icon'>
          <Icon component={RightArrow} />
        </span>
      </div>
    ),
    prevArrow: (
      <div>
        <span className='icon'>
          <Icon component={leftArrow} />
        </span>
      </div>
    ),
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <CardSliderWrapper>
      {propertyImage?.length === 0 && (
        <div className='item'>
          <Image
            className='bg-img'
            src={noProperty}
            alt='bgImg'
            width={265}
            height={265}
          />
        </div>
      )}
      <Slider {...settings}>
        {propertyImage?.map((data: any, key: React.Key | null | undefined) => (
          <div className='item' key={key}>
            <Image
              className='bg-img'
              src={data.name}
              alt='bgImg'
              width={265}
              height={265}
            />
          </div>
        ))}
      </Slider>
    </CardSliderWrapper>
  );
};

export default CardSlider;
