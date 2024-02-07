import React, { useState, useRef, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

// scss import
import './scss/cm.common.scss';
import './scss/_cp.swiper.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 */


export const TySwiper = ({setPage}) => {

  const [currentTab, setCurrentTab] = useState(0);
  const [swiper, setSwiper] = useState();

  const menuArr = [
    { id:'1', name: 'Tab1', content: 'Tab swiper 1' },
    { id:'2', name: 'TabTab2', content: 'Tab swiper 2' },
    { id:'3', name: 'TabTabTab3', content: 'Tab swiper 3' },
    { id:'4', name: 'Tab4', content: 'Tab swiper 4' },
    { id:'5', name: 'Tab5', content: 'Tab swiper 5' },
    { id:'6', name: 'Tab6', content: 'Tab swiper 6' },
    { id:'7', name: 'Tab7', content: 'Tab swiper 7' },
    { id:'8', name: 'Tab8', content: 'Tab swiper 8' },
    { id:'9', name: 'Tab9', content: 'Tab swiper 9' },
    { id:'10', name: 'Tab10', content: 'Tab swiper 10' },
  ];

  const swiperHandler = (index) => {
    setCurrentTab(index);
    // .tab-nav의 첫번째에 위치하도록 스크롤 조정
    // swiperRef.current.slideTo(index);
    // .tab-nav의 가운데에 위치하도록 스크롤 조정
    const tabNav = document.querySelector('.tab-nav');
    const slideWidth = tabNav.scrollWidth / menuArr.length;
    const offsetLeft = index * slideWidth - tabNav.offsetWidth / 2 + slideWidth / 2;
    tabNav.scrollTo({ left: offsetLeft, behavior: 'smooth' });
  };

  const onClickTab = (index) => {
    if (swiper) {
      swiper.slideTo(index, 1000);
    }
  }
 

  switch (setPage){

    case 'Base':
      return (
        <>
            <Swiper
              className='tab-content'
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              onSwiper={setSwiper} 
              >
              {menuArr.map((el,index) => (
                <SwiperSlide key={el.id} data-index={index} className={index === currentTab ? "swiper-slide swiper-slide-active" : "swiper-slide" }>
                  {el.content}
                </SwiperSlide>
              ))} 
            </Swiper>
        </>
      )

    case 'Tab':
      return (
        <>
          <div className='tab-swiper'>
            <Swiper
              className='tab-nav'
              modules={[Scrollbar, A11y]}
              slidesPerView={'auto'}
              onSlideChange={(swiper) => {
                swiperHandler(swiper.activeIndex) // 슬라이드 변경시 이벤트 동작
                }}> 
              {menuArr.map((el,index) => (
                <SwiperSlide key={el.id} className={index === currentTab ? "swiper-slide active" : "swiper-slide" } 
                onClick={() => {
                  swiperHandler(index);
                  onClickTab(index);
                  return false; // 클릭 이벤트에서 기본 동작을 막기 위해 false 반환
                }}>
                  {/* <a onClick={e => e.preventDefault}>{el.name}</a> */}
                  <a>{el.name}</a>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className='tab-content'
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              //spaceBetween={50}
              slidesPerView={1}
              onSwiper={setSwiper} 
              onSlideChange={(e) => {
                swiperHandler(e.activeIndex) 
                onClickTab(e.activeIndex)
              }}>
              {menuArr.map((el,index) => (
                <SwiperSlide key={el.id} data-index={index} className={index === currentTab ? "swiper-slide swiper-slide-active" : "swiper-slide" } 
                >
                  {el.content}
                </SwiperSlide>
              ))} 
            </Swiper>
            </div>
        </>
      )

    case 'ScrollTab':
      return (
        <>
          <div className='tab-swiper'>
            <Swiper
              className='tab-nav'
              modules={[Scrollbar, A11y]}
              slidesPerView={'auto'}
              onSlideChange={(swiper) => {
                swiperHandler(swiper.activeIndex) // 슬라이드 변경시 이벤트 동작
                }}> 
              {menuArr.map((el,index) => (
                <SwiperSlide key={el.id} className={index === currentTab ? "swiper-slide active" : "swiper-slide" } 
                onClick={() => {
                  swiperHandler(index);
                  onClickTab(index);
                  return false; // 클릭 이벤트에서 기본 동작을 막기 위해 false 반환
                }}>
                  {/* <a onClick={e => e.preventDefault}>{el.name}</a> */}
                  <a>{el.name}</a>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className='tab-content'
              modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
              //spaceBetween={50}
              slidesPerView={1}
              direction="vertical"
              mousewheel={true}
              onSwiper={setSwiper} 
              onSlideChange={(e) => {
                swiperHandler(e.activeIndex) 
                onClickTab(e.activeIndex)
              }}>
              {menuArr.map((el,index) => (
                <SwiperSlide key={el.id} data-index={index} className={index === currentTab ? "swiper-slide swiper-slide-active" : "swiper-slide" } 
                >
                  {el.content}
                </SwiperSlide>
              ))} 
            </Swiper>
            </div>
        </>
      )
    }
  };

export default TySwiper;


// Docs 문서 작성 영역
TySwiper.propTypes = {
};
// Docs 기본값
TySwiper.defaultProps = {
  
};