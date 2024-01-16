import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './../style/storyBook.scss'
import './../style/cm.common.scss';

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
    // console.log(data.x)
    let _arr = []
    _arr.push(data.x, data.y )
    console.log(_arr)
    
    setPostion(_arr)
  }

  console.log(postion)

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
          {
            tooltipModal == true ? <ToolTipModal message={message} dirType={dirType} Ani={Ani} setAni={setAni} setTooltipModal={setTooltipModal}/> : null
          }
        </div>
        
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
  return(
    <div id="" className={
      props.Ani == true ? "tooltip _is-active _" + props.dirType : 'modalPop _' + props.dirType
    } 
    tabIndex="0" 
    role="tooltip">
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

