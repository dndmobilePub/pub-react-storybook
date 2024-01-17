import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import './css/cm.common.css';
import './css/storyBook.css';


export const TySwiper = ({setPage}) => {
  

  switch (setPage){

    case 'Base':
    return (
      <div className='cp-content storybook' style={{width: 500}}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        
        
      </div>
    )

  }
};





// Docs 문서 작성 영역
TySwiper.propTypes = {
  
  /**
   * tooltip 방향 설정
   */
  type: PropTypes.oneOf(['default', 'top', 'left', 'bottom']),
  
};

// Docs 기본값
TySwiper.defaultProps = {
  type: 'default',
};

