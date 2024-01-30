import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './css/cm.common.css';
import './css/storyBook.css';



export const ToolTip = ({setPage, type}) => {
  
  // Tooltip show&hide
  let [tooltipModal,  setTooltipModal] = useState(false)
  // tootip 방향 useState 저장
  let [dirType, setDirType] = useState() 
  // tootip 방향 message 저장
  let [message, setMessage] =useState('')
  let [Ani,  setAni] = useState(false)

  // 툴팁버튼 버튼 위치 값
  let [postion, setPostion] = useState([])

  let dataValueCheck = (e) => {
    let data = e.target.getBoundingClientRect()
    // console.log(data)
    let _arr = [...postion]
    _arr.length = 0;
    _arr.push(data.top, data.left )
    setPostion(_arr)
  }
  
  const BtnToolTipRef = useRef(null);

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      let data = BtnToolTipRef.current.getBoundingClientRect()
      // console.log(data)
      let _arr = [...postion]
      _arr.length = 0;
      _arr.push(data.top, data.left)
      setPostion(_arr)
    })

  },[])

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

  // tootip 방향 값 변경될때마다 추가
  useEffect(()=>{
    setDirType(type);
  
  }, [type])


  switch (setPage){

    case 'Base':
    return (
      <div className='cp-content storybook'>
        <div className="tooltipWrap" style={{textAlign: 'center'}}>
          {/* 기본형  */}
          <a ref={BtnToolTipRef} href="javascript:;" 
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

      </div>
    )

    

  }
};

function ToolTipModal(props){

  
  const ToolTipRef = useRef(null);
  // Tooltip 위치 저장
  let [poTop, setPoTop] = useState(0)
  let [poLeft, setPoLeft] = useState(0)


  useEffect(()=>{
    // Tooltip 가로/세로 size 구하기
    let Width = ToolTipRef.current.scrollWidth
    let Height = ToolTipRef.current.scrollHeight
    
    let _dirType = props.dirType  
    // type 위치별 툴팁 위치
    if( props.Ani == true){
      // default
      if( _dirType == 'default'){
        let _top = props.postion[0] - (( Height / 2) - 10)
        let _left = props.postion[1] + 30
        setPoLeft(_left)
        setPoTop(_top)
      } 
      // top
      else if (_dirType == 'top'){
        let _top = props.postion[0] - (Height + 12)
        let _left = props.postion[1] - ((Width / 2) - 10)
        setPoLeft(_left)
        setPoTop(_top)
      }
      // left
      else if (_dirType == 'left'){
        let _top = props.postion[0] - (( Height / 2) - 10)
        let _left = props.postion[1] -(Width + 12)
        setPoLeft(_left)
        setPoTop(_top)
      }
      // bottom
      else if (_dirType == 'bottom'){
        let _top = props.postion[0] + 30
        let _left = props.postion[1] - ((Width / 2) - 10)
        setPoLeft(_left)
        setPoTop(_top)
      }
    }


    
  },[props.Ani, props.dirType, props.postion])

  return(
    <div ref={ToolTipRef} className={
      props.Ani == true ? "tooltip _is-active _" + props.dirType : 'modalPop _' + props.dirType
    }
    tabIndex="0" 
    role="tooltip"
    style={{
      top: (poTop),
      left: (poLeft)
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

