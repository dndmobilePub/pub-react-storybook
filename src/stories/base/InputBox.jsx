import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// scss import
import './scss/cm.common.scss';
import './scss/_cp.input.scss';

/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 * type - input 타입
 * label - label 내용 
 * disabled -버튼 Disabld 상태
 * fieldState - input 상태 선택
 */


export const InputBox = ({setPage, type, disabled, label, placeholder, infoState, validMsg, fieldState, infoMsg, inputcase}) => {
  const Disable = disabled ? 'disabled' : '';

  const InfoState = infoState ? '' : 'hr' 
  const _fieldState = fieldState ? 'valid' : 'invalid';

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
        <i key={i} className={
          i === 0 ? '_line ' + isActive : null
        } aria-hidden="true" 
        style={{
          'left' : (
            (i === 0) ? left :
            (i === 1) ? space :
            (i > 1 ) ? space += 16 : 0
          ) + 'px', 
          'opacity' : i === 0 ? opacityNum : null,
          'display' : i === 0 ? resDisplay : null
        }}
      ></i>);
    }
    return result
  }

  //input 2개 이상일 경우
  const [inputStates, setInputStates] = useState([
    { value: '', active: false, placeholder: 'text default1', label: 'text default1', Disable: 'disabled'},
  ]);

  //input 2개 이상일 경우 : 휴대폰 번호 input
  const [InputPhoneStates, setInputPhoneStates] = useState([
    { value: '', active: false, placeholder: '010', maxLength:'3'},
    { value: '', active: false, placeholder: '1234', maxLength:'4'},
    { value: '', active: false, placeholder: '5678', maxLength:'4'},
  ]);

  //삭제버튼 이벤트
  const handleInputValueChange = (index, value, inputType) => {
    let updatedInputStates;
    if (inputType === 'phone') {
      updatedInputStates = [...InputPhoneStates];
    } else {
      updatedInputStates = [...inputStates];
    }
  
    updatedInputStates[index] = {
      ...updatedInputStates[index],
      value,
      active: true
    };
  
    if (inputType === 'phone') {
      setInputPhoneStates(updatedInputStates);
    } else {
      setInputStates(updatedInputStates);
    }
  };
  
  const handleInputClear = (index, inputType) => {
    let updatedInputStates;
    if (inputType === 'phone') {
      updatedInputStates = [...InputPhoneStates];
    } else {
      updatedInputStates = [...inputStates];
    }
  
    updatedInputStates[index] = {
      ...updatedInputStates[index],
      value: '',
      active: false
    };
  
    if (inputType === 'phone') {
      setInputPhoneStates(updatedInputStates);
    } else {
      setInputStates(updatedInputStates);
    }
  };

  //placeholder input
  const [isInputFocused, setIsInputFocused] = useState(Array(inputStates.length).fill(false));

  const handleInputFocus = (index) => {
    const newIsInputFocused = [...isInputFocused];
    newIsInputFocused[index] = true;
    setIsInputFocused(newIsInputFocused);
  }

  const handleInputBlur = (index) => {
    const newIsInputFocused = [...isInputFocused];
    newIsInputFocused[index] = false;
    setIsInputFocused(newIsInputFocused);
  }



  // 자동 하이픈 생성 함수
  const handleAutoHyphen = (value) => {
    // 숫자만 남기고 하이픈 제거
    value = value.replace(/[^0-9]/g, '');
    // 휴대폰번호 형식에 맞춰 하이픈 추가
    if (value.length > 3 && value.length <= 7) {
      value = value.replace(/^(.{3})(.*)/, '$1-$2');
    } else if (value.length > 7) {
      value = value.replace(/^(.{3})(.{4})(.*)/, '$1-$2-$3');
    }
    return value;
  };


  switch (setPage){
    
    case 'Base':
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

    case 'ResidentNum':
    return (
      <>
        {inputStates.map((inputState, index) => (
          <div className={['field', '_label', fieldState].join(' ')} key={index}>
            <label className="field-label">주민등록번호</label>
            <div className={"field-outline " + Disable}>
              <div className="field-input grow _input">
                <input type="text" className="_format _number" 
                  placeholder={placeholder}
                  maxLength="6"
                  value={inputState.value}
                  onChange={(e) => handleInputValueChange(index, e.target.value, 'default')}
                />
                  {inputState.active && (
                    <InputDelBtn
                      handleInputClear={() => handleInputClear(index, 'default')}
                    />
                  )}
              </div>
              <span className="field-txt">-</span>
              <div className="field-input grow _input">
                <label className="_secureTxt _num" data-length="7" data-secureline="1">
                  <input type="tel" className="_format _password" placeholder="" maxLength="1" 
                    onChange={(e)=>{
                      setResInputVal(e.target.value)
                    }}
                    // 포커스가 될때 opactiy 0.5
                    onClick={()=>{
                      setOpacityNum('0.5')
                    }}
                    // 포커스가 나갈때 opactiy 1
                    onBlur={()=>{
                      setOpacityNum('1')
                    }}
                  />
                  {numDot()}
                </label>
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

    case 'LabelResidentNum':
    return (
      <>
      {inputStates.map((inputState, index) => {
        const allInputsEmpty = inputStates.every(state => !state.value); // 모든 input 요소의 value 값이 없는지 확인

        return (
          <div className={['field', '_label', fieldState].join(' ')} key={index}>
            <div className={"field-outline " + Disable}>
              <label 
                className={`field-label ${isInputFocused[index] || InputPhoneStates.some(state => state.value) ? '_is-active' : ''}`}
                onClick={() => handleInputFocus(index)}
              >
                {label}
              </label>
              <div className={`field-input-wrap ${isInputFocused[index] ? '' : 'hr'}`}>
                <div className="field-input grow _input">
                  <input type="text" className="_format _number" 
                    placeholder={placeholder}
                    maxLength="6"
                    value={inputState.value}
                    onChange={(e) => handleInputValueChange(index, e.target.value, 'default')}
                    onFocus={() => handleInputFocus(index)}
                    onBlur={() => {
                      if (allInputsEmpty) { // 모든 input 요소의 value 값이 없는 경우에만 onBlur 이벤트 실행
                        handleInputBlur(index);
                      }
                    }}
                  />
                  {inputState.active && (
                    <InputDelBtn
                      handleInputClear={() => handleInputClear(index, 'default')}
                    />
                  )}
                </div>
                <span className="field-txt">-</span>
                <div className="field-input grow _input">
                  <label className="_secureTxt _num" data-length="7" data-secureline="1">
                    <input type="tel" className="_format _password" placeholder="" maxLength="1" 
                      onChange={(e)=>{
                        setResInputVal(e.target.value)
                      }}
                      // 포커스가 될때 opactiy 0.5
                      onClick={()=>{
                        setOpacityNum('0.5')
                      }}
                      // 포커스가 나갈때 opactiy 1
                      onBlur={()=>{
                        setOpacityNum('1')
                      }}
                    />
                    {numDot()}
                  </label>
                </div>
              </div>
            </div>
            <p className={"field-info " + InfoState}>
              <span className="ico ico-info txt-r">{infoMsg}</span>
            </p>
            <p className={"field-msg"} >
              <span className="ico ico-error txt-r">{validMsg}</span>
            </p>
          </div>
        );
      })}
    </>

    
    )

    case 'phoneNum':
    return (
      <>
        {inputStates.map((inputState, index) => (
        <div className={['field', '_label', fieldState].join(' ')}  key={index}>
          <label className="field-label">휴대폰번호 입력</label>
          <div className={"field-outline " + Disable}>
            {InputPhoneStates.map((InputPhoneState, index) => (
              <React.Fragment key={index}>
                <div className="field-input grow _input">
                  <input
                    className="_format _number _format1"
                    maxLength={InputPhoneState.maxLength}
                    type='text'
                    placeholder={placeholder}
                    disabled={Disable}
                    value={InputPhoneState.value}
                    onChange={(e) => handleInputValueChange(index, e.target.value, 'phone')}
                  />
                  {InputPhoneState.active && (
                    <InputDelBtn
                      handleInputClear={() => handleInputClear(index, 'phone')}
                    />
                  )}
                </div>
                {index !== InputPhoneStates.length - 1 && <span className="field-txt">-</span>}
              </React.Fragment>
            ))}
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

    case 'Label':
    return (
      <>
        {inputStates.map((inputState, index) => (
          <div className={['field', '_label', fieldState].join(' ')} key={index}>
            <div className={"field-outline " + Disable}>
            <label 
              className={`field-label ${isInputFocused[index] || inputState.value ? '_is-active' : ''}`}
              onClick={() => handleInputFocus(index)}
            >
              {label}
            </label>
              <div className="field-input grow _input">
                <input className="_format" 
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                  value={inputState.value}
                  onChange={(e) => handleInputValueChange(index, e.target.value, 'default')}
                  onFocus={() => handleInputFocus(index)}
                  onBlur={() => handleInputBlur(index)}
                />
                {inputState.active && (
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
          </div>
        ))}
      </>
    )

    case 'LabelPhone':
    return (
      <>
        {inputStates.map((inputState, index) => (
          <div className={['field', '_label', fieldState].join(' ')} key={index}>
            <div className={"field-outline " + Disable}>
              <label
                className={`field-label ${isInputFocused[index] || InputPhoneStates.some(state => state.value) ? '_is-active' : ''}`}
                onClick={() => handleInputFocus(index)}
              >
                {label}
              </label>
              {InputPhoneStates.map((InputPhoneState, index) => (
                <React.Fragment key={index}>
                  <div className="field-input grow _input">
                    <input
                      className="_format _number _format1"
                      maxLength={InputPhoneState.maxLength}
                      type='text'
                      placeholder={placeholder}
                      disabled={Disable}
                      value={InputPhoneState.value}
                      onChange={(e) => handleInputValueChange(index, e.target.value, 'phone')}
                      onFocus={() => handleInputFocus(index)}
                      onBlur={() => handleInputBlur(index)}
                    />
                    {InputPhoneState.active && (
                      <InputDelBtn
                        handleInputClear={() => handleInputClear(index, 'phone')}
                      />
                    )}
                  </div>
                  {index !== InputPhoneStates.length - 1 && <span className="field-txt">-</span>}
                </React.Fragment>
              ))}
            </div>
              {/* <div className={`field-input-wrap ${isInputFocused[index] ? '' : 'hr'}`}>
            </div> */}
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

    case 'LabelPhoneAuto':
    return (
      <>
        {inputStates.map((inputState, index) => (
          <div className={['field', '_label', fieldState].join(' ')} key={index}>
            <div className={"field-outline " + Disable}>
            <label 
              className={`field-label ${isInputFocused[index] || inputState.value ? '_is-active' : ''}`}
              onClick={() => handleInputFocus(index)}
            >
              {label}
            </label>
              <div className="field-input grow _input">
                <input className="_format" 
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                  value={inputState.value}
                  maxLength={13}
                  // 자동 하이픈 생성 함수를 포함한 input 요소의 onChange 핸들러
                  onChange={(e) => {
                    const value = e.target.value;
                    const hyphenatedValue = handleAutoHyphen(value);
                    handleInputValueChange(index, hyphenatedValue, 'default');
                  }}
                  onFocus={() => handleInputFocus(index)}
                  onBlur={() => handleInputBlur(index)}
                />
                {inputState.active && (
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
          </div>
        ))}
      </>
    );
    
    }
  };
  export default InputBox;


//삭제 버튼 
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

// Docs 문서 작성 영역
InputBox.propTypes = {
  /**
   * label
   */
  label: PropTypes.string.isRequired,
  /**
   * input 타입
   */
  type: PropTypes.oneOf(['text', 'number', 'password']),
  /**
   * 버튼 true 인 경우 Disabld 상태
   */
  disabled: PropTypes.bool,
  /**
   * input 오류체크
   */
  fieldState: PropTypes.oneOf(['', 'valid', 'invalid']),
};



