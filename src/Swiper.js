import React, { useEffect } from 'react';

import TySwiper  from './stories/base/Swiper';

function TySwiperPage() {
  
  
  return (
    <div style={{width: '500px'}}>
      <TySwiper setPage="Base" />
      <TySwiper setPage="Tab" />
      <TySwiper setPage="ScrollTab"/>
    </div>
  );
}

export default TySwiperPage;
