import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './css/cm.common.css';
import './css/storyBook.css';


export const InputBox = ({setPage, type, readonly, disabled, label, placeholder, errMsg , fieldState}) => {
  const Disable = disabled ? 'disabled' : '';

  const ErrMsg = errMsg ? '' : 'hr' 

  let [widthCss, setWidthCss] = useState('')

  // 이메일&주민등록번호 첫번째 input useState
  let [inputBtn, setInputBtn] = useState(false)
  let [inputVal, setInputVal] = useState('')
  
  // 주민등록번호 두번째 input useState
  let [resInputBtn, setResInputBtn] = useState(false) 
  let [resInputVal, setResInputVal] = useState('')
  let [resDisplay, setResDisplay] = useState('block')

  let [dotLength] = useState(7)
   
  let [isActive, setIsActive] = useState('')
  let [opacityNum, setOpacityNum] = useState('1')

  // inputVal 값이 변경 될때마다 체크
  useEffect(()=>{
    if( inputVal == '' ){
      setInputBtn(false)
      setWidthCss('')
    }
  }, [inputVal])

   // 이메일&주민등록번호 첫번째 input 값 입력값 체크 및 css 추가
   function inputChange(val){
    let _widthCss = 'calc(100% - 2.4rem)' 
    setWidthCss(_widthCss)
    setInputBtn(true);
    setInputVal(val)
  }
  
   // 주민등록번호 두번쨰 값이 변경 될때마다 체크
   useEffect(()=>{
    if( resInputVal == '' ){
      setResInputBtn(false)
      setIsActive('')
      setResDisplay('block')
    }
    if( resInputVal != '' ){
      setResDisplay('none')
    }
  }, [resInputVal])

  // 주민등록번호 뒷자리 input 값 입력값 체크 및 css 추가
  function _inputChange(val){
    setIsActive('_is-active')
    setResInputBtn(true);
    setResInputVal(val)
  }

  let numDot = () => {
    let result = [];
    let left = 0;
    let space = 13;
    for( let i = 0; i < dotLength; i++){
      result.push(
        <i key={i} className={
          i == 0 ? '_line ' + isActive : null
        } aria-hidden="true" 
        style={{
          'left' : (
            (i == 0) ? left :
            (i == 1) ? space :
            (i > 1 ) ? space += 16 : 0
          ) + 'px', 
          'opacity' : i == 0 ? opacityNum : null,
          'display' : i == 0 ? resDisplay : null
        }}
      ></i>);
    }
    
    return result
  }


  //input 2개 이상일 경우
  const [inputStates, setInputStates] = useState([
    { value: '', active: false, widthCss: '', placeholder: '010', maxLength:'3'},
    { value: '', active: false, widthCss: '', placeholder: '1234', maxLength:'4'},
    { value: '', active: false, widthCss: '', placeholder: '5678', maxLength:'4'},
  ]);

  const handleInputChange = (index, value) => {
    const updatedInputStates = [...inputStates];
    updatedInputStates[index] = { ...updatedInputStates[index], value, widthCss: 'calc(100% - 2.4rem)', active: true };
    setInputStates(updatedInputStates);
  };

  const handleInputClear = (index) => {
    const updatedInputStates = [...inputStates];
    updatedInputStates[index] = { ...updatedInputStates[index], value: '', widthCss: '', active: false };
    setInputStates(updatedInputStates);
  };



  switch (setPage){

    case 'Base':
    return (
      <div className='cp-content'>
        <div className={['field', fieldState].join(' ')}>
        <label className="field-label">{label}</label>
          <div className={"field-outline " + Disable}>
            <div className="field-input grow _input">
            <input className="_format" 
                type={type}
                placeholder={placeholder}
                disabled = {Disable}
                style={{"width": widthCss}}
                value={inputVal}
                onChange={(e)=>{
                  let val = e.target.value
                  inputChange(val)
                }}
              />
              {
                inputBtn === true ? <InputDelBtn setWidthCss={setWidthCss} inputVal={inputVal} setInputVal={setInputVal} inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
              }
            </div>
          </div>
          <p className={"field-msg " + ErrMsg}>
            <span className="ico ico-info txt-r">오류체크 메세지 출력</span>
          </p>
        </div>
      </div>
  
    )

    case 'exception':
    return (
      <div className='cp-content'>
        <div className='field'>
          {label}
          <div className={"field-outline " + Disable}>
            <div className={['field-input', 'grow', '_input' ].join(' ')}>
              <input 
                type={type}
                placeholder={placeholder}
                disabled = {Disable}
              >
              </input>
            </div>
          </div>
        </div>
      </div>
  
    )

    case 'disable':
      return (
        <div className='cp-content'>
          <div className='field'>
            {label}
            <div className={"field-outline " + Disable}>
              <div className="field-input grow _input">
                <input className="_format" 
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                  style={{"width": widthCss}}
                  value={inputVal}
                  onChange={(e)=>{
                    let val = e.target.value
                    inputChange(val)
                  }}
                />
                {
                  inputBtn === true ? <InputDelBtn setWidthCss={setWidthCss} inputVal={inputVal} setInputVal={setInputVal} inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
            </div>
          </div>
        </div>
  
      )

      case 'infoMsg':
      return (
        <div className='cp-content'>
          <div className='field'>
            {label}
            <div className={"field-outline " + Disable}>
              <div className="field-input grow _input">
                <input className="_format" 
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                  style={{"width": widthCss}}
                  value={inputVal}
                  onChange={(e)=>{
                    let val = e.target.value
                    inputChange(val)
                  }}
                />
                {
                  inputBtn === true ? <InputDelBtn setWidthCss={setWidthCss} inputVal={inputVal} setInputVal={setInputVal} inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
            </div>
            <p className={"field-msg " + ErrMsg} >
              <span className="ico ico-info txt-r">안내성 메세지</span>
            </p>
          </div>
        </div>
    
      )

      case 'validState':
      return (
        <div className='cp-content'>
          <div className={['field', fieldState].join(' ')}>
          <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              <div className="field-input grow _input">
                <input className="_format" 
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                  style={{"width": widthCss}}
                  value={inputVal}
                  onChange={(e)=>{
                    let val = e.target.value
                    inputChange(val)
                  }}
                />
                {
                  inputBtn === true ? <InputDelBtn setWidthCss={setWidthCss} inputVal={inputVal} setInputVal={setInputVal} inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
            </div>
            <p className={"field-msg " + ErrMsg} >
              <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
            </p>
          </div>
        </div>
      )

      case 'residentNum':
      return (
        <div className='cp-content'>
          <div className={['field', fieldState].join(' ')}>
          <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              <div className="field-input grow _input">
                <input type="text" className="_format _number" placeholder="생년월일 6자리" maxLength="6"
                  style={{"width": widthCss}}
                  value={inputVal}
                  onChange={(e)=>{
                    let val = e.target.value
                    inputChange(val)
                  }}
                />
                {
                  inputBtn === true ? <InputDelBtn setWidthCss={setWidthCss} inputVal={inputVal} setInputVal={setInputVal} inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
              <span className="field-txt">-</span>
              <div className="field-input grow _input">
                <label className="_secureTxt _num" data-length="7" data-secureLine="1">
                  <input type="tel" className="_format _password" placeholder="" maxLength="1" 
                    onChange={(e)=>{
                      let val = e.target.value
                      _inputChange(val)
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
            <p className={"field-msg " + ErrMsg}>
              <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
            </p>
          </div>
        </div>
      )

      case 'phoneNum':
      return (
        <div className='cp-content'>
          <div className={['field', '_label', fieldState].join(' ')}>
            <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              {inputStates.map((inputState, index) => (
                <React.Fragment key={index}>
                  <div className="field-input grow _input">
                    <input
                      className="_format _number _format1"
                      maxLength={inputState.maxLength}
                      type='text'
                      placeholder={inputState.placeholder} 
                      disabled={Disable}
                      style={{ "width": inputState.widthCss }}
                      value={inputState.value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    {inputState.active && (
                      <InputDelBtn2
                        handleInputClear={() => handleInputClear(index)}
                      />
                    )}
                  </div>
                  {index !== inputStates.length - 1 && <span className="field-txt">-</span>}
                </React.Fragment>
              ))}
            </div>
            <p className={"field-msg " + ErrMsg}>
              <span className="ico ico-info txt-r">오류체크 메세지 출력</span>
            </p>
          </div>
        </div>
  
    )

  }
};

// 삭제 버튼 
function InputDelBtn(props){
  return(
    <button type="button" className="field-btn _input-clear _active"
      onClick={()=>{
        props.setInputBtn(false);
        let selectInput = document.getElementsByClassName('_format')[0] 
        selectInput.value = null;
        props.setWidthCss('')
        props.setInputVal('')
        
      }}
    ><span className="hide">입력값삭제</span></button>

  )
}
// input 2개 이상일 경우 삭제 버튼 
function InputDelBtn2({ handleInputClear }) {
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
   * input 타이틀
   */
  label: PropTypes.string.isRequired,
   /**
   * input 타입
   */
   type: PropTypes.oneOf(['text', 'number', 'password']),
   /**
   * fieldState 
   */
   fieldState: PropTypes.oneOf(['', 'valid', 'invalid']),
};



