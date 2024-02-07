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
 *  <h2 className="sb-tit-h2">Button 컴포넌트 정의</h2>
 *  <p className="sb-info desc">
 *    <strong class="key-color1">[주의]</strong> 모달팝 옵션인 <strong class="uline keyTxt">"dataValue, dataModal" 은 setPage : "modal" 일 경우에만 선택</strong>해야 됩니다.
 *  </p>
 *  <ul className="sb-lst desc">
 *    <li>dataValue : 모달팝업의 위치 지정</li>
 *    <li>
 *      dataModal : 모달팝에 들어갈 컨텐츠 페이지 지정.
 *      <p>ex) 컨텐츠 페이지의 <strong class="key-color3 uline keyTxt">파일명 규칙은 Lpop로 시작</strong>되어야 하며, LpopSample.js일 경우 입력값은 <strong class="key-color2 uline keyTxt">Sample</strong>이 됩니다.</p>
 *    </li>
 *  </ul>
 * </div>
 */

export const Button = ({ setPage, disabled, backgroundColor, style, size, label, dataValue, dataModal, wType, onClick }) => {
  
  const Disable = disabled ? 'disable' : null;
  const Style = style === 'normal' ? '' : style;
  const widthType = wType ? 'full' : null;
  
  // setPage 이름별로 스토리 컴포넌트 노출
  switch (setPage){

    case '1st':
    return (
      <>
      <button
            type="button"
            className={['btn', 'btn-size', 'bg', style !== 'normal' ? Style : '', size, widthType || '', Disable ? 'disabled' : ''].filter(Boolean).join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
      </button>
      </>
    )

    case '2nd':
    return (
      <>
      <button
            type="button"
            className={['btn', 'btn-size', 'bg', 'type2', style !== 'normal' ? Style : '', size, widthType || '', Disable ? 'disabled' : ''].filter(Boolean).join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
      </button>
      </>
    )   

    case '3rd':
    return (
      <>
      <button
            type="button"
            className={['btn', 'btn-size', 'bg', 'type3', style !== 'normal' ? Style : '', size, widthType || '', Disable ? 'disabled' : ''].filter(Boolean).join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
          >
          {label}
      </button>
      </>
    )    

    case 'modal':
      return (
        <>
          <button
              type="button"
              className={['btn', 'btn-size', 'bg', '_modalBtn', style !== 'normal' ? Style : '', size, widthType || '', Disable ? 'disabled' : ''].filter(Boolean).join(' ')}
              disabled={Disable} // const Disable 값을 사용하여 버튼 비활성화
              style={backgroundColor && { backgroundColor }}
              data-value={dataValue} // dataValue prop의 값 사용
              data-modal={dataModal} // dataModal prop의 값 사용
              onClick={onClick} // onClick prop 추가
            >
              {label}
            </button>
        </>
      )

    case 'disable':
    return (
      <div className='cp-content storybook'>
        <div className='btnWrap'>
          <button
            type="button"
            className={['btn', 'btn-size', 'bg', style !== 'normal' ? Style : '', size, widthType || '', Disable ? 'disabled' : ''].filter(Boolean).join(' ')}
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
Button.propTypes = {
  /**
   * 버튼 용도 선택
   */
  setPage: PropTypes.oneOf(['1st','2nd','3rd', 'modal']),
  /**
   * Disabled 상태 : true 인 경우 버튼 disabled 적용
  */
  disabled: PropTypes.bool,
  /**
   * 버튼의 가로 사이즈 full/free : true 인 경우 full 클래스 적용
  */
  wType: PropTypes.bool,
  /**
   * <div className="sb-guide">
   * <strong class="key-color1 uline keyTxt">★모달버튼 전용</strong> : 모달팝업이 뜨는 위치 설정
   * </div>
   */
  dataValue: PropTypes.oneOf(['', 'Top', 'Left', 'Right', 'Center', 'Toast']),

  /**
   * <div className="sb-guide">
   * <strong class="key-color1 uline keyTxt">★모달버튼 전용</strong> : 모달팝업 컨텐츠 페이지명 LpopSample.js 일경우 Sample만 입력
   * </div>
   */
  dataModal: PropTypes.string,

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
Button.defaultProps = {
  backgroundColor: null,
  style: '',
  disabled: false,
  widthType: '',
  size: 'md',
};

export default Button;