import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.select.scss';
import './scss/storyBook.scss';

/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 * errMsg - 에러메시지 on/off
 */

/** 
 * Select 컴포넌트 정의
 */

export const Select = ({setPage, errMsg }) => {
  
  // 에러 메시지 true일대 invalid 클래스 추가
  const ErrMsg = errMsg ? 'invalid' : null 

  let [widthCss, setWidthCss] = useState()

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
  useEffect(()=>{
    if( inputVal === '' ){
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

  // 주민등록번호 두번쨰 값이 변경 될때마다 체크 (resInputVal값이 변경될때마다)
  useEffect(()=>{
    if( resInputVal === '' ){
      setIsActive('')
      setResDisplay('block')
    }
    if( resInputVal !== '' ){
      setResDisplay('none')
    }
  }, [resInputVal])

  // 주민등록번호 뒷자리 input 값 입력값 체크 및 css 추가
  function _inputChange(val){
    setIsActive('_is-active')
    setResInputVal(val)
  }

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
                inputBtn === true ? 
                <InputDelBtn 
                  setWidthCss={setWidthCss} 
                  inputVal={inputVal} setInputVal={setInputVal} 
                  inputBtn={inputBtn} setInputBtn={setInputBtn}
                /> : null 
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
          <p className={"field-msg " + ErrMsg} >
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
                inputBtn === true ? 
                <InputDelBtn 
                  setWidthCss={setWidthCss} 
                  inputVal={inputVal} setInputVal={setInputVal} 
                  inputBtn={inputBtn} setInputBtn={setInputBtn}
                /> 
                : null 
              }
            </div>
            <span className="field-txt">-</span>
            <div className="field-input grow _input">
            {/* data-secureLine -> data-secureline 으로 수정 */}
              <label className="_secureTxt _num" data-length="7" data-secureline="1">
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
          <p className={"field-msg " + ErrMsg} >
            <span className="ico ico-error txt-r">오류체크 메세지 출력</span>
          </p>
          <p className="field-info">
            <span className="ico ico-info txt-r">안내성 메세지</span>
          </p>
        </div>
      </div>
    )

    case 'UI select':
    return (
      <div className='cp-content storybook'>
        <div className="field">
          <label className="field-label">휴대전화번호</label>
          <div className="field-outline">
            <button className="btn btn-size md bg _selectBtn" data-select="select1"
              onClick={()=>{
                setModal(true)
              }}
            
            >{comAgency[comNumber]}</button>
            <div className="field-input grow _input">
              <input type="tel" className="_format _number" placeholder="휴대전화 앞자리" maxLength="3"
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
      </div>
    )
    default:
  }
};
// 삭제 버튼 
function InputDelBtn(props){
  return(
    <button type="button" className="field-btn _input-clear _active"
      onClick={()=>{

        props.setInputBtn(false)
        let selectInput = document.getElementsByClassName('_format')[0] 
        selectInput.value = null
        props.setWidthCss('')
        props.setInputVal('')
      }}
    ><span className="hide">입력값삭제</span></button>

  )
}
// Dimmed 영역
function Dimmed(){
  return(
    <div className="dimmed" aria-hidden="true"></div>
  )
}

// Modal
function ModalPop(props){

  // modal 통신사 선택 기본 index 값 
  let [countIndex, setCountIndex] = useState(props.comNumber);
  // 클릭시 통신사 setCountIndex으로 변경된 index 값 전달
  let handleOnClick = (e, idx) =>{
    setCountIndex(idx);
  }

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
                      className={ countIndex === idx ? '_is-active' : null }>
                      <a href="#/" className="sel-opt " 
                      onClick={ (e)=>{
                        handleOnClick(e, idx)
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
                  props.setComNumber(countIndex)
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
   * 오류 메시지 출력
   */
  errMsg: PropTypes.bool,

};

// Docs 기본값
Select.defaultProps = {
  errMsg : false,
 
};

