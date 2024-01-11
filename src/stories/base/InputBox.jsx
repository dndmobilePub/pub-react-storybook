import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './../style/storyBook.scss'
import './../style/cm.common.scss';
/**
 * Primary UI component for user interaction
 */
export const InputBox = ({setPage, type, readonly, disabled, label, placeholder, invalid , fieldState}) => {
  const Disable = disabled ? 'disabled' : '';
  //const Readonly = readonly ? 'readonly' : 'false';

  let [inputBtn, setInputBtn] = useState(false)

  const Invalid = invalid ? 'invalid' : '' 

  // input 값 입력값 체크 및 css 추가
  function inputChange(){
    let widthCss = 'calc(100% - 2.4rem)'
    let selectInput = document.getElementById('input') 
    // let value = selectInput.value;
    selectInput.style.width = widthCss
    setInputBtn(true);
  }

  switch (setPage){

    case '':
    return (
      <div className='cp-content'>
        <div className='field'>
          {label}
          <div className='field-outline'>
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
          <p className={"field-msg " + Invalid }>
            <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
          </p>
        </div>
      </div>
  
    )

    case 'exception':
    return (
      <div className='cp-content'>
        <div className='field'>
          {label}
          <div className='field-outline'>
            <div className={['field-input', 'grow', '_input' ].join(' ')}>
              <input 
                id="input"
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
            <div className={['field-outline', 'disabled' ].join(' ')}>
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
            <div className='field-outline'>
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
            <p className="field-info">
              <span className="ico ico-info txt-r">안내성 메세지</span>
            </p>
          </div>
        </div>
    
      )

      case 'validState':
      const _fieldState = fieldState ? 'valid' : 'invalid';
      return (
        <div className='cp-content'>
          <div className={['field',  _fieldState].join(' ')}>
          {label}
            <div className='field-outline'>
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
            <p className={"field-msg " + Invalid + _fieldState }>
              <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
            </p>
          </div>
        </div>
      )

      case 'password':
      return (
        <div className='cp-content'>
          <div className='field'>
          {/* {label} */}
            <div className='field-outline pw-group'>
              <div className={['field-input', 'grow', '_input' ].join(' ')}>
                <label className="_secureTxt" data-length="4" data-secureLine="2">
                  <input 
                    id="input"
                    type={type}
                    // readonly = {Readonly}
                    className='_format _password'
                    maxlength="2"
                  />
                </label>
              </div>
            </div>
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
   type: PropTypes.oneOf(['text', 'number', 'button','password']),
   /**
    * 오류 메시지 출력
   */
   invalid: PropTypes.bool,
  /**
  * input 상태
  */
  fieldState: PropTypes.bool,
};


InputBox.defaultProps = {
  invalid : false,
};

