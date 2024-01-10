import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './../style/storyBook.scss'
import './../style/cm.common.scss';

export const Select = ({setPage, invalid }) => {
  
  let [widthCss, setWidthCss] = useState('')

  let [inputBtn, setInputBtn] = useState(false)
  let [inputVal, setInputVal] = useState('')
  
  // 
  let [resInputBtn, setResInputBtn] = useState(false)
  let [resInputVal, setResInputVal] = useState('')
  let [resDisplay, setResDisplay] = useState('block')

  let [dataLength] = useState(7)
  
  let [isActive, setIsActive] = useState('')
  let [opacityNum, setOpacityNum] = useState('1')

  const Invalid = invalid ? 'invalid' : '' 

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
    for( let i = 0; i < dataLength; i++){
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

    case 'Email':
    return (
      <div className='cp-content storybook'>
        <div className="field">
          <label className="field-label">이메일</label>
          <div className="field-outline">
            <div className="field-input grow _input">
              <input type="tel" className="_format _number" placeholder="메일아이디" maxLength="5"
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
            <span className="field-txt">@</span>
            <div className="field-select grow">
              <select className="select-sys" title="메일도메인">
                <option>선택해주세요</option>
                <option>naver.com</option>
                <option>daum.net</option>
                <option>gmail.com</option>
              </select>
            </div>
          </div>
          <p className={"field-msg " + Invalid }>
            <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
          </p>
          <p className="field-info">
            <span className="ico ico-info txt-r">안내성 메세지</span>
          </p>
        </div>
      </div>
    )

    case 'ResidentNum':
    return (
      <div className='cp-content storybook'>
        <div className="field">
          <label className="field-label">주민등록번호</label>
          <div className="field-outline">
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
          <p className={"field-msg " + Invalid }>
            <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
          </p>
          <p className="field-info">
            <span className="ico ico-info txt-r">안내성 메세지</span>
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


// Docs 문서 작성 영역
Select.propTypes = {
  /**
   * 오류 메시지 출력
   */
  invalid: PropTypes.bool,

};

// Docs 기본값
Select.defaultProps = {
  invalid : false,
 
};

