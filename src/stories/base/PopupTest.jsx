import React, { useState } from 'react';
import './scss/cm.common.scss';
import './scss/_cp.popup.scss';
import './scss/storyBook.scss';
import PageLoader from './components/test_com/PageLoader'; 

export const PopupTest = () => {  
  const [pageName, setPageName] = useState(null); // setPage를 null로 설정

  return (
    <div className='cp-content storybook'>
      <div className="btnWrap">
        <PageLoader setPage={setPageName} pageName={pageName} />
      </div>  
    </div>
  )
};

PopupTest.propTypes = {
  // setPage: PropTypes.func.isRequired,
};

PopupTest.defaultProps = {
  // setPage: () => {},
};
