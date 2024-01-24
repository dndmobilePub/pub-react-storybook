import React, { useEffect, useState, useRef } from 'react';
import PropTypes, { func } from 'prop-types';
import './css/cm.common.css';
import './css/storyBook.css';


export const TabMenu = ({ setPage, postion, poLine }) => {

  const Postion = postion == 'center' ? 'tab-center' : ''
  const PoLine = poLine == 'top' ? 'tab-line-top' : ''
  let [ menuPostion, setMenuPostion] = useState(Postion)
  // 탭메뉴 개수
  let [tabList] = useState([...new Array(5)].map((_, i) => i + 1))
  // 탭메뉴 index
  let [selected, setSelected] = useState(0)
  // 탭 line 위치 값
  let [ linePo, setLinePo ] = useState(0)
  let [ cenLinePo, setCenLinePo ] = useState(0)

  // 탭 선택
  const tabMenu = (i) => {
    setSelected(i)
  }

  

  // 탭 라인 위치값 구하기 
  let tabLineCheck = (e, i) => {
    console.log(e.target.getBoundingClientRect().width)
    let check = e.target.getBoundingClientRect().width
    
    if( postion === 'center'){
      let co = cenLinePo + (20 * i) + (check * i)
      console.log(co)
      setLinePo(co )
    } else {
      setLinePo(0 + (20 * i) + (check * i) )
    }

  } 


  switch (setPage){
    case 'Base':
    return ( 
      <div className='cp-content storybook'>
        <h2 className="cp-tit dep02">block 형, 새창으로 이동</h2>
        <div className="tab-wrap" data-roll="tab">
          <div className={"tab-list-wrap tab-expand " + PoLine}>
            <TabList
              selected={selected} setSelected={setSelected}
              tabMenu={tabMenu}
              tabList={tabList}
            />
          </div>
        </div>
      </div>
    )

    case 'TabAction':
      
    return ( 
      <div className='cp-content storybook'>
        <h2 className="cp-tit dep02">정렬, Line 위치</h2>
        <div className="tab-wrap tab-moving " data-roll="tab">
          <div className={ "tab-list-wrap " + Postion}>
            <TabList2 
              postion={postion}
              setLinePo={setLinePo}
              setCenLinePo={setCenLinePo}
              selected={selected} setSelected={setSelected}
              tabMenu={tabMenu}
              tabList={tabList}
              tabLineCheck={tabLineCheck}
            />
            <span className="highlight" 
              style={{
                left: linePo
              }}
            ></span>
          </div>
          <TabContentWrap
            selected={selected}
            tabList={tabList}
          />
        </div>
      </div>
    )

  }
};


function TabList(props){
  return(
    <ul className="tab-list" id="tabList">
      {
        props.tabList.map(function(item, i){
          return (
            <li key={i} className={ props.selected === i ? "tab _is-active" : "tab"}>
              <a href="javascript:void(0);" target=""
                onClick={(e)=>{
                  props.tabMenu(i)
                }}
              > Tab 0{props.tabList[i]}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

function TabList2(props){

  // 
  useEffect(()=>{
    const ele = document.getElementById('tab_0').offsetLeft
    if( props.postion === 'center'){
      props.setLinePo(ele)
      props.setCenLinePo(ele)
    } else {
      props.setLinePo(ele)

    }
  },[props.postion])

  return(
    <ul className="tab-list" id="tabList">
      {
        props.tabList.map(function(item, i){
          return (
            <li id={'tab_' + i} key={i} className={ props.selected === i ? "tab _is-active" : "tab"}>
              <a href="javascript:void(0);" target=""
                onClick={(e)=>{
                  props.tabMenu(i)
                  props.tabLineCheck(e, i)
                }}
              > Tab 0{props.tabList[i]}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}


function TabContentWrap(props){
  return(
    <div className="tab-contents-wrap">
      {
        props.tabList.map(function(item, i){
          return (
            <div key={i} className={ props.selected === i ? "tab-contents _is-active" : "tab-contents"}>
              <h3 className="hide">Tab 0{props.tabList[i]}</h3>
                tab-2_{i + 1}
            </div>
          )
        })
      }
    
    </div>
  )
}




// Docs 문서 작성 영역
  TabMenu.propTypes = {
    /**
     * tooltip 방향 설정
     */
    poLine: PropTypes.oneOf(['default', 'top']),
    postion: PropTypes.oneOf(['default', 'center']),
  
  
    
  };


  // Docs 기본값
  TabMenu.defaultProps = {
    postion : 'default'
  };

 

