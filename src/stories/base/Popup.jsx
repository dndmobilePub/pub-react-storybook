import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.popup.scss';
import './scss/storyBook.scss';


/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 */


/** 
 * Popup 컴포넌트 정의
 */
export const Popup = ({setPage }) => {
  
  // modal show&hide
  let [modal,  setModal] = useState(false)
  let [toastModal,  setToastModal] = useState(false)
  let [Ani,  setAni] = useState(false)

  // modal 위치 담는 useState
  let [postion, setPostion] =useState('')
  
  let dataValueCheck = (e) => {
    let data = e.target.dataset.value
    setPostion(data)
  }

 // _is-active 시간차 추가
  useEffect(()=>{
    if( modal === true){
      setTimeout(()=>{
        setAni(true)
      }, 600)
    } else {
      setAni(false)
    }
  
  }, [modal])

  // toast Popup 
  useEffect(()=>{
    if( toastModal === true){
      setTimeout(()=>{
        setToastModal(false)
      }, 4000)
    } 
  }, [toastModal])



  switch (setPage){

    case 'TOP':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _modalBtn" data-value='Top'
            onClick={(e)=>{
              dataValueCheck(e)
              setModal(true)
              
            }}
          data-modal="modal1">Top Modal</button>
        </div>

        {/* [s] modal */}
        {
          modal === true ? 
          <ModalPop  
          postion = {postion}
          Ani={Ani} setAni={setAni} 
          modal={modal} setModal={setModal}
          /> : null
        }
        {/* [e] modal  */}
        {
          modal === true ? <Dimmed /> : null
        }  
        {
          toastModal === true ? <ToastPop/> : null
        }
      </div>
    )

    case 'CENTER':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _modalBtn" data-value='Center'
            onClick={(e)=>{
              dataValueCheck(e)
              setModal(true)
              
            }}
          data-modal="modal2">Center Modal</button>
        </div>

        {/* [s] modal */}
        {
          modal === true ? 
          <ModalPop  
          postion = {postion}
          Ani={Ani} setAni={setAni} 
          modal={modal} setModal={setModal}
          /> : null
        }
        {/* [e] modal  */}
        {
          modal === true ? <Dimmed /> : null
        }  
        {
          toastModal === true ? <ToastPop/> : null
        }
      </div>
    )

    case 'LEFT':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _modalBtn" data-value='Left'
            onClick={(e)=>{
              dataValueCheck(e)
              setModal(true)
              
            }}
          data-modal="modal3">Left Modal</button>
        </div>

        {/* [s] modal */}
        {
          modal === true ? 
          <ModalPop  
          postion = {postion}
          Ani={Ani} setAni={setAni} 
          modal={modal} setModal={setModal}
          /> : null
        }
        {/* [e] modal  */}
        {
          modal === true ? <Dimmed /> : null
        }  
        {
          toastModal === true ? <ToastPop/> : null
        }
      </div>
    )

    case 'BOTTOM':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _modalBtn" data-value='Bottom'
            onClick={(e)=>{
              dataValueCheck(e)
              setModal(true)
              
            }}
          data-modal="modal4">Bottom Modal</button>
        </div>

        {/* [s] modal */}
        {
          modal === true ? 
          <ModalPop  
          postion = {postion}
          Ani={Ani} setAni={setAni} 
          modal={modal} setModal={setModal}
          /> : null
        }
        {/* [e] modal  */}
        {
          modal === true ? <Dimmed /> : null
        }  
        {
          toastModal === true ? <ToastPop/> : null
        }
      </div>
    )
    case 'TOAST':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _toastBtn" data-value='toast'
            onClick={()=>{
              setToastModal(true)
              
            }}
          data-toast="토스트 팝업메세지를 출력" >토스트팝업</button>
        </div>

        {/* [s] modal */}
        {
          modal === true ? 
          <ModalPop  
          postion = {postion}
          Ani={Ani} setAni={setAni} 
          modal={modal} setModal={setModal}
          /> : null
        }
        {/* [e] modal  */}
        {
          modal === true ? <Dimmed /> : null
        }  
        {
          toastModal === true ? <ToastPop/> : null
        }
      </div>
    )
    default:
  }
};

function Dimmed(){
  return(
    <div className="dimmed" aria-hidden="true"></div>
  )
}


function ModalPop(props){

  // 문자열 소문자로 변경
  let checkPostion = props.postion.toLowerCase();

  return(
    <div className={
      props.Ani === true ? 'modalPop _is-active _' + checkPostion : 'modalPop _' + checkPostion 
      } 
      select-target="modal1"
    >
      <div className="modalWrap">
        <div className="modal-header">
          {/* center&bottom 일경우 이전페이지 버튼 숨기기 */}
          {
            (checkPostion === 'center') ? null :
            (checkPostion === 'bottom') ? null : <Hisprec />
          }
          <h1 className="mp-title dep01">{props.postion} Modal</h1>
          <a href="#/" className="btn-close-pop ico ico-pop-close" role="button"
            onClick={(e)=>{
              e.preventDefault()
              props.setModal(false)
              props.setAni(false)
            }}
          >
            <span className="hide">창닫기</span>
          </a>
        </div>
        <div className="modal-container">
          <p 
            style={
              checkPostion === 'bottom' ? {
                height: 100 + 'px',
                background: 'yellow' 
              } : null
            }
          >{props.postion} Modal Content</p>
        </div>
        <div className="modal-footer">
          <BtnWrap setModal={props.setModal} checkPostion={checkPostion}/>
        </div>
      </div>
    </div>
  )
}


function Hisprec(){
  return(
    <a href="#/" className="ico ico-his-prev" role="button"
      onClick={(e)=> e.preventDefault()}
    >
      <span className="hide">이전페이지</span>
  </a>
  )
}

function BtnWrap(props){
  return(
    <div className="btnWrap grow">
      <button className={ 
        props.checkPostion === 'center' ? 'btn btn-size md type2 bg btn-close-pop' : 'btn btn-size md type2 bg' 
      }
        onClick={()=>{
          props.setModal(false)
        }}
      >확인</button>
      {
        props.checkPostion === 'center' ? null : 
        <button className="btn btn-size md bg btn-close-pop"
          onClick={(()=>{
            props.setModal(false)
          })}
        >취소</button>
      }
      
    </div>
  )
}

function ToastPop(){
  return(
    <div className='toastWrap' role='alert' aria-live="assertive" tabIndex={0}>
      <div className='toast-msg'>토스트팝업메시지를 출력</div>
      <a href="#/" className='btn icon-close' aria-label='Close' tabIndex={-1}
        onClick={(e)=>e.preventDefault()}
      >
        <span className='hide'>토스트팝업닫기</span>
      </a>
    </div>
  )
}





// Docs 문서 작성 영역
Popup.propTypes = {
  
};

// Docs 기본값
Popup.defaultProps = {
  // type: 'default',
};

