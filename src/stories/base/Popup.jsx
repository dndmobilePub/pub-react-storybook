import React, { useEffect, useState } from 'react';


// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.popup.scss';
import './scss/storyBook.scss';

// componet import
import Dimmed from './components/popup/Dimmed';
import ModalPop from './components/popup/ModalPop';
import ToastPop from './components/popup/ToastPop';

import { Txt, Txt1, Txt2, Txt3 } from './components/test_com/Txt';
import TestData from './components/test_com/testData';



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


  // const openModal = ()=>{
  //   if( modal === true){
  //     html?.classList.add('scroll-locked')
  //   }
  // }

  

  let [popupData, setPopupData] = useState([
    {id : 0, component : <Txt />},
    {id : 1, component : <Txt1 />},
    {id : 2, component : <Txt2 />},
    {id : 3, component : <Txt3 />}
  ]) 


  let[ popupNum, setpopupNum] = useState(null)


  switch (setPage){

    case 'Top':
    return (
      <div className='cp-content storybook'>
        {/* <ModalProvider>

          <SomeComponent />
          <Modal></Modal>
        </ModalProvider> */}
        <div className="btnWrap">
        
          <button className="btn btn-size md bg _modalBtn" data-value={setPage}
            onClick={(e)=>{
              setPostion(e.target.dataset.value)
              setModal(true)
              setpopupNum(0)
            }}
          data-modal="modal1">커스텀용</button>

          <button className="btn btn-size md bg _modalBtn" data-value={setPage}
            onClick={(e)=>{
              setPostion(e.target.dataset.value)
              setModal(true)
            }}
          data-modal="modal1">{setPage} Modal</button>
        </div>

        {/* [s] modal */}
        {
          modal === true ? 
            <ModalPop  
            popupNum ={ popupNum}
            popupData={popupData}
            postion = {postion}
            Ani={Ani} setAni={setAni} 
            modal={modal} setModal={setModal}
            /> : null
        }
        {/* [e] modal  */}
        {
          modal === true ? <Dimmed /> : null
        }  
      </div>
    )

    case 'Center':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _modalBtn" data-value={setPage}
            onClick={(e)=>{
              setPostion(e.target.dataset.value)
              setModal(true)
            }}
          data-modal="modal1">{setPage} Modal</button>
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
       
      </div>
    )

    case 'Left':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _modalBtn" data-value={setPage}
            onClick={(e)=>{
              setPostion(e.target.dataset.value)
              setModal(true)
            }}
          data-modal="modal1">{setPage} Modal</button>
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
      </div>
    )

    case 'Bottom':
    return (
      <div className='cp-content storybook'>
      <div className="btnWrap">
        <button className="btn btn-size md bg _modalBtn" data-value={setPage}
          onClick={(e)=>{
            setPostion(e.target.dataset.value)
            setModal(true)
          }}
        data-modal="modal1">{setPage} Modal</button>
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
    </div>
    )
    case 'Toast':
    return (
      <div className='cp-content storybook'>
        <div className="btnWrap">
          <button className="btn btn-size md bg _toastBtn" data-value={setPage}
            onClick={()=>{
              setToastModal(true)
            }}
          data-toast="토스트 팝업메세지를 출력" >토스트팝업</button>
        </div>

        {/* [s] modal */}
        {
          toastModal === true ? <ToastPop/> : null
        }
        {/* [e] modal  */}
        {
          modal === true ? <Dimmed /> : null
        }  
       
      </div>
    )
    default:
  }
};











// Docs 문서 작성 영역
Popup.propTypes = {
  
};

// Docs 기본값
Popup.defaultProps = {
  // type: 'default',
};

