import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './css/cm.common.css';
import './css/storyBook.css';


export const InputBox = ({setPage, type, readonly, disabled, label, placeholder, errMsg , fieldState}) => {
  const Disable = disabled ? 'disabled' : '';
  //const Readonly = readonly ? 'readonly' : 'false';

  const ErrMsg = errMsg ? '' : 'hr' 
  const _fieldState = fieldState ? 'valid' : 'invalid';

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

  // input 값 입력값 체크 및 css 추가
  function inputChange(){
    let widthCss = 'calc(100% - 2.4rem)'
    let selectInput = document.getElementById('input') 
    // let value = selectInput.value;
    selectInput.style.width = widthCss
    setInputBtn(true);
  }

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


  switch (setPage){

    case 'Base':
    return (
      <div className='cp-content'>
        <div className={['field', ].join(' ')}>
        <label className="field-label">{label}</label>
          <div className={"field-outline " + Disable}>
            <div className={['field-input', 'grow', '_input' ].join(' ')}>
              <input 
                id="input"
                type={type}
                placeholder={placeholder}
                disabled = {Disable}
              // readonly = {Readonly}
                onChange={(e)=>{
                  inputChange(e)
                }}
              />
            {
                inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
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
                //readonly = {Readonly}
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
              <div className={['field-input', 'grow', '_input' ].join(' ')}>
                <input 
                  id="input"
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                // readonly = {Readonly}
                  onChange={(e)=>{
                    inputChange(e)
                  }}
                />
              {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
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
              <div className={['field-input', 'grow', '_input' ].join(' ')}>
                <input 
                  id="input"
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                // readonly = {Readonly}
                  onChange={(e)=>{
                    inputChange(e)
                  }}
                />
              {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
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
          <div className={['field',  _fieldState].join(' ')}>
          <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              <div className={['field-input', 'grow', '_input' ].join(' ')}>
                <input 
                  id="input"
                  type={type}
                  placeholder={placeholder}
                  disabled = {Disable}
                // readonly = {Readonly}
                  onChange={(e)=>{
                    inputChange(e)
                  }}
                />
              {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
            </div>
            <p className={"field-msg " + ErrMsg} >
              <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
            </p>
          </div>
        </div>
      )

      // case 'password':
      // return (
      //   <div className='cp-content'>
      //     <div className='field'>
      //     <label className="field-label">{label}</label>
      //       <div className='field-outline pw-group'>
      //         <div className="field-input grow _input">
      //           <label id='password_secureTxt' className="_secureTxt _num" data-length='4' data-secureLine="2">
      //             <input type="tel" className="_format _password" placeholder="" maxLength="2" 
      //               onChange={(e)=>{
      //                 let val = e.target.value
      //                 _inputChange(val)
      //               }}
      //               // 포커스가 될때 opactiy 0.5
      //               onClick={()=>{
      //                 setOpacityNum('0.5')
      //               }}
      //               // 포커스가 나갈때 opactiy 1
      //               onBlur={()=>{
      //                 setOpacityNum('1')
      //               }}
      //             />
      //             {numDot()}
      //           </label>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // )

      case 'residentNum':
      return (
        <div className='cp-content'>
          <div className={['field',  ].join(' ')}>
          <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              <div className="field-input grow _input">
                <input className="_format _number" maxLength="6"
                  type='text'
                  placeholder={placeholder}
                  style={{"width": widthCss}}
                  value={inputVal}
                  onChange={(e)=>{
                    let val = e.target.value
                    inputChange(val)
                  }}
                />
                {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
              <span className="field-txt">-</span>
              <div className="field-input grow _input">
                <label className="_secureTxt _num" data-length='7' data-secureLine="1">
                  <input type="text" className="_format _password" placeholder="" maxLength="1" 
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
                {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
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
          <div className={['field', '_label' ].join(' ')}>
          <label className="field-label">{label}</label>
            <div className={"field-outline " + Disable}>
              <div className={['field-input', 'grow', '_input' ].join(' ')}>
                <input className={['_format', '_number' ].join(' ')}
                  id="input"
                  type='text'
                  placeholder={placeholder}
                  disabled = {Disable}
                // readonly = {Readonly}
                  maxlength="3"
                />
                {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
              <span class="field-txt">-</span>
              <div className={['field-input', 'grow', '_input' ].join(' ')}>
                <input className={['_format', '_number' ].join(' ')}
                  id="input"
                  type='text'
                  placeholder={placeholder}
                  disabled = {Disable}
                // readonly = {Readonly}
                  maxlength="4"
                />
                {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
              <span class="field-txt">-</span>
              <div className={['field-input', 'grow', '_input' ].join(' ')}>
                <input className={['_format', '_number' ].join(' ')}
                  id="input"
                  type='text'
                  placeholder={placeholder}
                  disabled = {Disable}
                // readonly = {Readonly}
                  maxlength="4"
                />
                {
                  inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
                }
              </div>
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
    <button type="button" class="field-btn _input-clear _active"
      onClick={()=>{
        props.setInputBtn(false);
        let selectInput = document.getElementById('input') 
        selectInput.value = null;
        selectInput.style.width = null
      }}
    ><span class="hide">입력값삭제</span></button>

  )
}

// Docs 문서 작성 영역
InputBox.propTypes = {
  /**
   * input 타이틀
   */
  label: PropTypes.string.isRequired,
   /**
   * placeholder
   */
   placeholder: PropTypes.string.isRequired,
   /**
   * input 타입
   */
   type: PropTypes.oneOf(['text', 'number', 'password']),
};



