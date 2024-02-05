import React, { useState, useEffect } from "react";


// component import
import Dimmed from "../popup/Dimmed";
import ModalPop from "../popup/ModalPop";


// 선택한 버튼의 페이지에 따라 동적으로 컴포넌트 불러오기
function PageLoader(props) {
  // Txt{이름}.jsx
  // import 하는 jsx 파일 뒷 이름 담는 state
  const [page, setPage] = useState("About"); 
  // import 된 컴포넌트 담는 state 
  const [Component, setComponent] = useState(null);

  // page 상태가 변경될 때마다 useEffect 실행
  useEffect(() => {
    import(`./Txt${page}`).then((module) => {
      setComponent(() => module.default);
    });
  }, [page]); 

  // modal show&hide
  let [modal,  setModal] = useState(false)
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


  return (
    <div className='cp-content storybook'>
        <div className="btnWrap">
        <button className="btn btn-size md bg _modalBtn" data-value={props.PageName}
          onClick={
            (e)=> {
              setPostion(e.target.dataset.value)
              setPage('About')
              setModal(true)
            }
          }
        >
          Home import 버튼
        </button>
        <button className="btn btn-size md bg _modalBtn" data-value={props.PageName}
          onClick={
            (e)=> {
              setPostion(e.target.dataset.value)
              setPage('Page')
              setModal(true)
            }
          }
        >
          Page import 버튼
        </button>
      </div>
      {
        modal === true ? 
        <ModalPop  
          Component = {Component}
          postion = {postion}
          Ani={Ani} setAni={setAni} 
          modal={modal} setModal={setModal} 
        /> : null 
      }
      {
        modal === true ? <Dimmed /> : null
      }  
    </div>
  );
}

export default PageLoader;
