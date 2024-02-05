import React, { useState } from 'react';


// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.popup.scss';
import './scss/storyBook.scss';

// component import
import PageLoader from './components/test_com/PageLoader'; 
/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 */

/** 
 * Popup 컴포넌트 정의
 */
export const PopupTest = ({setPage }) => {
  
  const [PageName] = useState(setPage) 

  switch (setPage){

    case 'Top':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <PageLoader 
            PageName={PageName}
          />
        </div>  
      </div>
    )    
    default:
  }
};

// Docs 문서 작성 영역
PopupTest.propTypes = {
  
};

// Docs 기본값
PopupTest.defaultProps = {
  // type: 'default',
};

