import React, { useEffect, useState } from 'react';


// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.popup.scss';
import './scss/storyBook.scss';

// componet import
import Dimmed from './components/popup/Dimmed';
import ModalPopT from './components/popup/ModalPopT';
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
export const PopupTest = ({setPage }) => {
  

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

  let [popupData] = useState(TestData) 

  let _dataType = (name)=>{
    let findVal = {name : name}
    console.log(Data)

    let found = popupData.filter((item) => item === findVal.name )
    console.log(found)
  }

  let [dataType, setDataType] = useState(null)


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
              _dataType('John Doe')
            }}
          data-modal="modal1">user 버튼</button>
          <button className="btn btn-size md bg _modalBtn" data-value={setPage}
            onClick={(e)=>{
              setPostion(e.target.dataset.value)
              setModal(true)
              _dataType('Tech Innovators')
            }}
          data-modal="modal1">com 버튼</button>
        </div>

        {/* [s] modal */}
        {
          modal === true ? 
            <ModalPopT  
            dataType = {dataType}
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
    default:
  }
};











// Docs 문서 작성 영역
PopupTest.propTypes = {
  
};

// Docs 기본값
PopupTest.defaultProps = {
  // type: 'default',
};

