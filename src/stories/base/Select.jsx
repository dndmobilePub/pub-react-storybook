import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './../style/storyBook.scss'
import './../style/cm.common.scss';

export const Select = ({setPage, invalid }) => {
  
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
      <div className='cp-content storybook'>
        <div className="field">
          <label className="field-label">이메일</label>
          <div className="field-outline">
            <div className="field-input grow _input">
              <input id="input" type="tel" className="_format _number" placeholder="메일아이디" maxlength="5"
                onChange={(e)=>{
                  inputChange(e)
                }}
              />
              {
                inputBtn === true ? <InputDelBtn inputBtn={inputBtn} setInputBtn={setInputBtn}/> : null 
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

