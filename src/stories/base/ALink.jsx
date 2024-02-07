import React from 'react';
import PropTypes from 'prop-types';

// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.button.scss';
import './scss/storyBook.scss';

/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 * disabled - 버튼 Disabld 상태
 * backgroundColor - 컴포넌트 배경색  
 * style - 버튼 타입 설정 (normal, round, shadow, line)
 * size - 버튼 크기 설정
 * label - 버튼 label
 */

/* Docs 설명 */
/** 
 * <div className="sb-guide">
 *  <h2 className="sb-tit-h2">A Link 컴포넌트 정의</h2>
 * </div>
 */

export const ALink = ({ setPage, disabled, backgroundColor, style, size, label, dataValue, dataModal, onClick }) => {
  
  const Disable = disabled ? 'disable' : null;
  
  // setPage 이름별로 스토리 컴포넌트 노출
  switch (setPage){

    case 'txtDefault':
      return (
        <>
        <a href="#/"
          onClick={(e)=> e.preventDefault()}
          className={['btn', 'btn-size', 'txt', size, Disable].filter(Boolean).join(' ')} role="button"
        >기본링크</a>
        </>
    
    )

    case 'txtLine':
      return (
        <>
            <a href="#/"
              onClick={(e)=> e.preventDefault()}
              className={['btn', 'btn-size', 'txt', 'uline', size, Disable].filter(Boolean).join(' ')} role="button"
            >라인링크</a>
        </>
    
    )

    case 'txtArrow':
      return (
        <>
          <a href="#/"
            onClick={(e)=> e.preventDefault()}
            className={['btn', 'btn-size', 'txt', 'ico arrow', size, Disable].filter(Boolean).join(' ')} role="button"
          >링크+화살표</a>
        </>
    
    )
  }
};

// Docs 문서 작성 영역
ALink.propTypes = {
  /**
   * A Link 타입선택
   */
  setPage: PropTypes.oneOf(['txtDefault',  'txtLine', 'txtArrow']),
   /**
   * 링크 Disabled 상태 :  true 인 경우 disabled 클래스 추가됨
   */
   disabled: PropTypes.bool,
  /**
   * 텍스트 사이즈 선택
   */
  size: PropTypes.oneOf(['xs', 's', 'md', 'lg', 'xl']),
  /**
   * 링크 text 값 입력
   */
  label: PropTypes.string,
  /**
   * 클릭 이벤트 핸들러
   */
  onClick: PropTypes.func, // onClick prop 추가
};

// Docs Parameter 기본값 설정
ALink.defaultProps = {
  disabled: false,
  size: 'md',
};

export default ALink;