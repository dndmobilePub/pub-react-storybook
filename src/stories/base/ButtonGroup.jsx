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

/** 
 * Button 컴포넌트 정의
 */

export const ButtonGroup = ({ setPage, disabled, backgroundColor, style, size, label, dataValue, dataModal, onClick }) => {
  
  const Disable = disabled ? 'disable' : null;
  
  // setPage 이름별로 스토리 컴포넌트 노출
  switch (setPage){

    case 'grow':
    return (
      <div className='cp-content storybook'>        
        <div className={['btnWrap', `${setPage}`].join(' ')}>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}` ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type2'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type3' ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'full' ,'line' ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
        </div>
      </div>
    )

    case 'grow full':
    return (
      <div className='cp-content storybook'>        
        <div className={['btnWrap', `${setPage}`].join(' ')}>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type2'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
        </div>
      </div>
    )

    case 'full':
    return (
      <div className='cp-content storybook'>        
        <div className={['btnWrap', `${setPage}`].join(' ')}>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type2'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type3'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
        </div>
      </div>
    )

    case 'full el':
    return (
      <div className='cp-content storybook'>        
        <div className={['btnWrap'].join(' ')}>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, `${setPage}` ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, `${setPage}`, 'type2'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`,`${setPage}`, 'type3'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
          </button>
        </div>
      </div>
    )
  }
};

// Docs 문서 작성 영역
ButtonGroup.propTypes = {
  /**
   * 버튼 스토리 이름
   */
  setPage: PropTypes.oneOf(['grow', 'grow full', 'full', 'full el']),
   /**
   * 버튼 true 인 경우 Disabld 상태
   */
   disabled: PropTypes.func,
  /**
 * 버튼 타입 선택
 */
  style: PropTypes.oneOf(['normal', 'round', 'shadow', 'line']),
  /**
   * 버튼 사이즈 선택
   */
  size: PropTypes.oneOf(['xs', 's', 'md', 'lg', 'xl']),
  /**
   * 배경색 선택
   */
  backgroundColor: PropTypes.string,
  /**
   * 버튼 text 값 입력
   */
  label: PropTypes.string,
  /**
   * 클릭 이벤트 핸들러
   */
  onClick: PropTypes.func, // onClick prop 추가
};

// Docs Parameter 기본값 설정
ButtonGroup.defaultProps = {
  backgroundColor: null,
  style: 'normal',
  disabled: false,
  size: 'md',
};

export default ButtButtonGroupn;