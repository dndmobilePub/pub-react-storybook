import React from 'react';

import TySwiper  from './stories/base/Swiper';

function TySwiperPage() {
  
  
  return (
    <>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">기본형</h2>
      <TySwiper setPage="Base" />
    </div>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">스크롤 이동</h2>
      <TySwiper setPage="Tab"/>
    </div>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">스크롤 / 세로형 / 휠이동가능</h2>
      <TySwiper setPage="ScrollTab"/>
    </div>
    </>
  );
}

export default TySwiperPage;
