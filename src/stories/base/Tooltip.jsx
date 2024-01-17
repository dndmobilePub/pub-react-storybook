import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './css/cm.common.css';
import './css/storyBook.css';



export const ToolTip = ({setPage, type,}) => {
  
  // Tooltip show&hide
  let [tooltipModal,  setTooltipModal] = useState(false)
  // tootip 방향 useState 저장
  let [dirType, setDirType] = useState() 
  // tootip 방향 message 저장
  let [message, setMessage] =useState('')
  let [Ani,  setAni] = useState(false)

  // 툴팁버튼 좌표
  let [postion, setPostion] = useState([])

  let dataValueCheck = (e) => {
    let data = e.target.getBoundingClientRect()
    console.log(data)
    let _arr = [...postion]
    _arr.length = 0;
    _arr.push(data.top, data.left )
    setPostion(_arr)
  }

  // _is-active 시간차 추가
  useEffect(()=>{
    if( tooltipModal == true){
      setTimeout(()=>{
        setAni(true)
      }, 600)
    } else {
      setAni(false)
    }
  
  }, [tooltipModal])

  // _is-active 시간차 추가
  useEffect(()=>{
    setDirType(type);
  
  }, [type])


  switch (setPage){

    case 'Base':
    return (
      <div className='cp-content storybook'>
        <div className="tooltipWrap" style={{textAlign: 'center'}}>
          {/* 기본형 */}
          <a href="javascript:;" 
            className={
              Ani == true ? "ico ico-tooltip _" + dirType + " _is-active" : "ico ico-tooltip"
            }
            aria-roledescription="button"
            data-focus="false"
            data-direction={type}
            data-message="일이삼사오육칠팔구십일이삼사오"
            data-toggle="tooltip"
            onClick={(e)=>{
              setTooltipModal(true)
              setDirType(e.target.dataset.direction)
              setMessage(e.target.dataset.message)
              dataValueCheck(e)
            }}
            >
            <span className="hide">툴팁</span>
          </a>
        </div>
        {
          tooltipModal == true ? <ToolTipModal tooltipModal={tooltipModal} postion={postion} message={message} dirType={dirType} Ani={Ani} setAni={setAni} setTooltipModal={setTooltipModal}/> : null
        }
        {/* <div className="tooltipWrap">
          기본형
          <a href="javascript:;" className="ico ico-tooltip"
            aria-roledescription="button"
            data-focus="false"
            data-direction="default"
            data-message="ToolTip Default :<br><br> 일이삼사오육칠팔구십일이삼사오<br>ToolTip message"
            data-toggle="tooltip">
            <span className="hide">툴팁</span>
          </a>
        </div>
        <div className="tooltipWrap">
          기본형 가운데 가운데가운데가운데
          <a href="javascript:;" className="ico ico-tooltip"
            aria-roledescription="button"
            data-focus="false"
            data-direction="default"
            data-message="ToolTip message : Default <br> ToolTip message <br> ToolTip message"
            data-toggle="tooltip">
            <span className="hide">툴팁</span>
          </a>
        </div>
        <div className="tooltipWrap">
          기본형 텍스트 길다 기본형 텍스트 길다 기본형 텍스트 길다
          <a href="javascript:;" className="ico ico-tooltip"
            aria-roledescription="button"
            data-focus="false"
            data-direction="default"
            data-message="ToolTip message : Default <br> ToolTip message <br> ToolTip message"
            data-toggle="tooltip">
            <span className="hide">툴팁</span>
          </a>
        </div> */}
        
      </div>
    )

  }
};
{/* <div className={
  props.Ani == true ? 'modalPop _is-active _' + checkPostion : 'modalPop _' + checkPostion 
  }  */}


function ToolTipModal(props){

  
  
  const ToolTipRef = useRef(null);
  // Tooltip 위치 저장
  let [width, setWidth] = useState(0)
  let [height, setHeight] = useState(0)


  useEffect(()=>{
    // Tooltip 가로/세로 size 구하기
    let Width = ToolTipRef.current.scrollWidth
    let height = ToolTipRef.current.scrollHeight
    setWidth(Width)
    setHeight(height)
  },[props.Ani])
  console.log(width)
  console.log(height)
  let cc = ()=>{
    let _dirType = props.dirType  
    if( _dirType === 'default'){
      
    }
  }

  




  return(
    <div ref={ToolTipRef} className={
      props.Ani == true ? "tooltip _is-active _" + props.dirType : 'modalPop _' + props.dirType
    }
    tabIndex="0" 
    role="tooltip"
    style={{
      top: (props.postion[0] - ((height/2) - 10) ),
      left: (props.postion[1] + 30)
    }}
    >
    <div className="tooltip-content">
        <p className="tooltip-message">
          ToolTip {props.dirType} :<br/><br/> 
          {props.message}<br/>
          ToolTip message
        </p>
        <a href="javascript:void(0);"  
        className="ico-tooltip-close"
        onClick={()=>{
          props.setTooltipModal(false)
        }}
        >
          <span className="hide">툴팁닫기</span>
          </a>
    </div>
</div>
  )
}



// Docs 문서 작성 영역
ToolTip.propTypes = {
  
  /**
   * tooltip 방향 설정
   */
  type: PropTypes.oneOf(['default', 'top', 'left', 'bottom']),
  
};

// Docs 기본값
ToolTip.defaultProps = {
  type: 'default',
};

