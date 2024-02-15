import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.select.scss';
import './scss/storyBook.scss';

/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 */

/** 
 * Select 컴포넌트 정의
 */

export const Select = ({setPage, type, disabled, label, placeholder, infoState, validMsg, fieldState, infoMsg, inputcase}) => {
  
  // 에러 메시지 true일대 invalid 클래스 추가
  // const ErrMsg = errMsg ? 'invalid' : null 
  const Disable = disabled ? 'disabled' : '';
  const InfoState = infoState ? '' : 'hr' 

  let [widthCss, setWidthCss] = useState(false)

  // 이메일 & 주민등록번호 첫번째 input 
  let [inputBtn, setInputBtn] = useState(false)
  let [inputVal, setInputVal] = useState('')
  
  // 주민등록번호 두번째 input useState
  let [resInputVal, setResInputVal] = useState('')
  
  // 첫번째 dot display style 
  let [resDisplay, setResDisplay] = useState('block')

  // dot 갯수
  let [dotLength] = useState(7)

  // input 값 입력시 클래스 변경 
  let [isActive, setIsActive] = useState('')
  // input 값 입력시 투명도값 변경
  let [opacityNum, setOpacityNum] = useState('1')

  // 통신사 정보
  let [comAgency, setComAgency] = useState(['선택', 'SKT', 'KT', 'LG U+', '알뜰폰']);
  // 통신사 index 기본값
  let [comNumber, setComNumber] = useState(0)

  // modal show & hide
  let [modal,  setModal] = useState(false)
  // modal 활성화시 애니메이션 효과 추가
  let [Ani,  setAni] = useState(false)
  
  // inputVal 값이 변경 될때마다 체크 (inputVal값이 변경될때마다)
  // input 값이 공백일때 clear 버튼 hide / txt-none class 제거

  useEffect(()=>{
    if( inputVal === '' ){
      setInputBtn(false)
      setWidthCss(false)
    } else {
      setWidthCss(true)
      setInputBtn(true)
    }
  }, [inputVal])

  // 주민등록번호 두번쨰 값이 변경 될때마다 체크 (resInputVal값이 변경될때마다)
  useEffect(()=>{
    if( resInputVal === '' ){
      setIsActive('')
      setResDisplay('block')
    }
    if( resInputVal !== '' ){
      setResDisplay('none')
      setIsActive('_is-active')
    }
  }, [resInputVal])


  // dot 배열
  let numDot = () => {
    let result = [];
    let left = 0;
    let space = 13;
    for( let i = 0; i < dotLength; i++){
      result.push(
        <i key={i} 
          className={
            i === 0 ? '_line ' + isActive : null
          } 
        aria-hidden="true" 
        style={{
          'left' : (
            (i === 0) ? left :
            (i === 1) ? space :
            (i > 1 ) ? space += 16 : 0
          ) , 
          'opacity' : i === 0 ? opacityNum : null,
          'display' : i === 0 ? resDisplay : null
        }}
      ></i>);
    }
    return result
  }

  // _is-active 시간차 추가 (modal값이 변경될때 마다)
  useEffect(()=>{
    if( modal === true){
      setTimeout(()=>{
        setAni(true)
      }, 1000)
    } else {
      setAni(false)
    }
  }, [modal])


  //input 2개 이상일 경우
  const [inputStates, setInputStates] = useState([
    { value: '', active: false, placeholder: 'text default1', label: 'text default1', Disable: 'disabled'},
  ]);

  //삭제버튼 이벤트
  const handleInputValueChange = (index, value, inputType) => {
    let updatedInputStates;
    if (inputType === 'phone') {
      // updatedInputStates = [...InputPhoneStates];
    } else {
    }
    updatedInputStates = [...inputStates];
  
    updatedInputStates[index] = {
      ...updatedInputStates[index],
      value,
      active: true
    };
  
    if (inputType === 'phone') {
      // setInputPhoneStates(updatedInputStates);
    } else {
      setInputStates(updatedInputStates);
    }
  };
  
  const handleInputClear = (index, inputType) => {
    let updatedInputStates;
    if (inputType === 'phone') {
      // updatedInputStates = [...InputPhoneStates];
    } else {
      updatedInputStates = [...inputStates];
    }
  
    updatedInputStates[index] = {
      ...updatedInputStates[index],
      value: '',
      active: false
    };
  
    if (inputType === 'phone') {
      // setInputPhoneStates(updatedInputStates);
    } else {
      setInputStates(updatedInputStates);
    }
  };

  const options = ['선택', 'SKT', 'KT', 'LG U+', '알뜰폰'];

  //select 기본 베이스
  const SelectBox = ({ className }) => {
    return (
      <select className={`${className}`} disabled={Disable}>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
    );
  };

  switch (setPage){

    case 'Base':
    return (
      <>
       <SelectBox className="_select" options={options}></SelectBox>
      </>
    )

    case 'Email':
    return (
      <>
        {inputStates.map((inputState, index) => (
          <div className={['field', fieldState].join(' ')} key={index}>
            <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              <div className="field-input grow _input">
                <input className="_format" 
                  type={type}
                  placeholder={placeholder}
                  disabled={Disable}
                  value={inputState.value}
                  inputcase={inputcase}
                  onChange={(e) => handleInputValueChange(index, e.target.value, 'default')}
                />
                {inputState.active && inputcase !== "exception" && ( 
                  <InputDelBtn
                    handleInputClear={() => handleInputClear(index, 'default')}
                  />
                )}
              </div>
              <span className="field-txt">@</span>
              <div className="field-select grow">
                <SelectBox className="select-sys" options={options}></SelectBox>
              </div>
            </div>
            <p className={"field-info " + InfoState}>
              <span className="ico ico-info txt-r">{infoMsg}</span>
            </p>
            <p className={"field-msg"} >
              <span className="ico ico-error txt-r">{validMsg}</span>
            </p>
          </div>
        ))}
      </>
    )

    case 'UI select':
    return (
      <>
        {inputStates.map((inputState, index) => (
          <div className={['field', fieldState].join(' ')} key={index}>
            <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              <button className="btn btn-size md bg _selectBtn" data-select="select1"
                onClick={()=>{
                  setModal(true)
                }}
              
              >{comAgency[comNumber]}</button>
              <div className="field-input grow _input">
                <input className="_format" 
                  type={type}
                  placeholder={placeholder}
                  disabled={Disable}
                  value={inputState.value}
                  inputcase={inputcase}
                  onChange={(e) => handleInputValueChange(index, e.target.value, 'default')}
                />
                {inputState.active && inputcase !== "exception" && ( 
                  <InputDelBtn
                    handleInputClear={() => handleInputClear(index, 'default')}
                  />
                )}
              </div>
            </div>
            <p className={"field-info " + InfoState}>
              <span className="ico ico-info txt-r">{infoMsg}</span>
            </p>
            <p className={"field-msg"} >
              <span className="ico ico-error txt-r">{validMsg}</span>
            </p>
            {/* [s] modal : _bottom */}
            {
              modal === true ? 
              <ModalPop 
                comNumber={comNumber}
                setComNumber={setComNumber} 
                comAgency={comAgency} 
                setComAgency={setComAgency} 
                Ani={Ani} setAni={setAni} 
                modal={modal} setModal={setModal}
              /> : null
            }
            {/* [e] modal : _bottom */}
            {
              modal === true ? <Dimmed /> : null
            }
          </div>
        ))}
      
      </>
    )
  }
};
export default Select;

// 삭제 버튼 
function InputDelBtn({ handleInputClear }) {
  return (
    <button
      type="button"
      className="field-btn _input-clear _active"
      onClick={handleInputClear}
    >
      <span className="hide">입력값삭제</span>
    </button>
  );
}
// Dimmed 영역
function Dimmed(){
  return(
    <div className="dimmed" aria-hidden="true"></div>
  )
}

// Modal
function ModalPop(props){
  return(
    <div className={
      props.Ani === true ? 'modalPop _bottom _is-active' : 'modalPop _bottom'
      } 
      select-target="select1"
    >
      <div className="modalWrap">
          <div className="modal-title">
            <h2 className="tit dep02">통신사를 선택해주세요</h2>
            <a href="#/" className="btn-close-pop ico ico-pop-close" role="button"
              onClick={(e)=>{
                e.preventDefault()
                props.setModal(false)
                props.setAni(false)
              }}
            ><span className="hide">창닫기</span></a>
          </div>
          <div className="modal-container">
            <ul className="select-lst">
              {
                props.comAgency.map(function(data, idx){
                  return(
                    <li key={idx} 
                      className={ props.comNumber === idx ? '_is-active' : null }>
                      <a href="#/" className="sel-opt " 
                      onClick={(e)=>{
                        props.setComNumber(idx)
                        e.preventDefault()
                      }
                      }>{props.comAgency[idx]}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="modal-footer">
            <div className="btnWrap grow">
              <button className="btn btn-size md type2 bg btn-selChoice" 
                onClick={()=>{
                  props.setComNumber(props.comNumber)
                  props.setModal(false)
                }}
              >선택</button>
              <button className="btn btn-size md bg btn-close-pop"
                onClick={(()=>{
                  props.setModal(false)
                })}
              >취소</button>
            </div>
          </div>
      </div>
    </div>
  )
}


// Docs 문서 작성 영역
Select.propTypes = {
  /**
   * label
   */
  label: PropTypes.string.isRequired,
  /**
   * 버튼 true 인 경우 Disabld 상태
   */
  disabled: PropTypes.bool,
  /**
   * Select 오류체크
   */
  fieldState: PropTypes.oneOf(['', 'valid', 'invalid']),
};