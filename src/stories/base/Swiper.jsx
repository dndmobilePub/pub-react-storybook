import React, { useState, useRef } from 'react';

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

  const [currentTabs, setCurrentTabs] = useState(new Array(10).fill(0));
  const [swipers, setSwipers] = useState(new Array(10).fill(null).map(() => useRef(null)));

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

  const swiperArr = [
    { id: '1', name: 'Tab1', content: 'Tab swiper 1' },
    { id: '2', name: 'TabTab2', content: 'Tab swiper 2' },
    { id: '3', name: 'TabTabTab3', content: 'Tab swiper 3' },
  ];

  const swiperHandlers = new Array(swiperArr.length).fill(0).map((_, i) => (index) => {
    // .tab-nav의 첫번째에 위치하도록 스크롤 조정
    // swiperRef.current.slideTo(index);
    // .tab-nav의 가운데에 위치하도록 스크롤 조정
    const tabNav = document.querySelector(`.tab-nav-${i}`);
    const slideWidth = tabNav.scrollWidth / menuArr.length;
    const offsetLeft = index * slideWidth - tabNav.offsetWidth / 2 + slideWidth / 2;
    tabNav.scrollTo({ left: offsetLeft, behavior: 'smooth' });
    setCurrentTabs((prev) => prev.map((tab, j) => (i === j ? index : tab)));
  });

  const onClickTabs = new Array(swiperArr.length).fill(0).map((_, i) => (index) => {
    if (swipers[i]) {
      swipers[i].slideTo(index, 1000);
    }
  });


  switch (setPage){

    case 'Base':
      return (
        <div className='cp-content storybook' style={{width: 500}}>
           {swiperArr.map((_, i) => (
            <div className='' key={i}>
              <Swiper style={{marginBottom: 30}}
                className={`tab-content tab-content-${i}`}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                onSwiper={(swiper) => setSwipers((prev) => prev.map((prevSwiper, j) => (i === j ? swiper : prevSwiper)))}
                onSlideChange={(e) => {
                  swiperHandlers[i](e.activeIndex);
                  onClickTabs[i](e.activeIndex);
                }}
              >
                {menuArr.map((el, index) => (
                  <SwiperSlide
                    key={el.id}
                    data-index={index}
                    className={index === currentTabs[i] ? 'swiper-slide swiper-slide-active' : 'swiper-slide'}
                  >
                    {el.content}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      )

    case 'Tab':
      return (
        <div className='cp-content storybook' style={{ width: 500 }}>
          {swiperArr.map((_, i) => (
            <div className='tab-swiper' key={i}>
              <Swiper
                ref={swipers[i]}
                className={`tab-nav tab-nav-${i}`}
                modules={[Scrollbar, A11y]}
                slidesPerView={'auto'}
              >
                {menuArr.map((el, index) => (
                  <SwiperSlide
                    key={el.id}
                    className={index === currentTabs[i] ? 'swiper-slide active' : 'swiper-slide'}
                    onClick={() => {
                      swiperHandlers[i](index);
                      onClickTabs[i](index);
                    }}
                  >
                    <a>{el.name}</a>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className={`tab-content tab-content-${i}`}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                onSwiper={(swiper) => setSwipers((prev) => prev.map((prevSwiper, j) => (i === j ? swiper : prevSwiper)))}
                onSlideChange={(e) => {
                  swiperHandlers[i](e.activeIndex);
                  onClickTabs[i](e.activeIndex);
                }}
              >
                {menuArr.map((el, index) => (
                  <SwiperSlide
                    key={el.id}
                    data-index={index}
                    className={index === currentTabs[i] ? 'swiper-slide swiper-slide-active' : 'swiper-slide'}
                  >
                    {el.content}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      );

    case 'ScrollTab':
      return (
        <div className='cp-content storybook' style={{ width: 500 }}>
          {swiperArr.map((_, i) => (
            <div className='tab-swiper' key={i}>
              <Swiper
                ref={swipers[i]}
                className={`tab-nav tab-nav-${i}`}
                modules={[Scrollbar, A11y]}
                slidesPerView={'auto'}
              >
                {menuArr.map((el, index) => (
                  <SwiperSlide
                    key={el.id}
                    className={index === currentTabs[i] ? 'swiper-slide active' : 'swiper-slide'}
                    onClick={() => {
                      swiperHandlers[i](index);
                      onClickTabs[i](index);
                    }}
                  >
                    <a>{el.name}</a>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className={`tab-content tab-content-${i}`}
                modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
                slidesPerView={1}
                direction="vertical"
                mousewheel={true}
                onSwiper={(swiper) => setSwipers((prev) => prev.map((prevSwiper, j) => (i === j ? swiper : prevSwiper)))}
                onSlideChange={(e) => {
                  swiperHandlers[i](e.activeIndex);
                  onClickTabs[i](e.activeIndex);
                }}
              >
                {menuArr.map((el, index) => (
                  <SwiperSlide
                    key={el.id}
                    data-index={index}
                    className={index === currentTabs[i] ? 'swiper-slide swiper-slide-active' : 'swiper-slide'}
                  >
                    {el.content}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      )
      default:
  

  }

  
};


// Docs 문서 작성 영역
TySwiper.propTypes = {
};

// Docs 기본값
TySwiper.defaultProps = {
  
};

