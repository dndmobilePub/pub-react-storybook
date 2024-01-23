import React, { useEffect, useState, useRef } from 'react';
import PropTypes, { func } from 'prop-types';
import './css/cm.common.css';
import './css/storyBook.css';


export const TabMenu = ({setPage, Postion, poLine }) => {

  let [tabList] = useState([...new Array(5)].map((_, i) => i + 1))
  let [selected, setSelected] = useState(0)
  let [ line, setLine ] = useState()
  // 아코디언 기본형
  const tabMenu = (i) => {
    if(selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }

  // 체크박스 단일 선택 
  let handleSingleCheck = (e) => {
    console.log(e.target.getBoundingClientRect())
  } 


  switch (setPage){
    case 'Base':
    return ( 
      <div className='cp-content storybook'>
        <h2 className="cp-tit dep02">block 형, 새창으로 이동</h2>
          {/* <!-- [S] tab list block 형식, 새창으로 이동 --> */}
          <div className="tab-wrap" data-roll="tab">
            <div className="tab-list-wrap tab-expand">
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
          {/* <!-- [S] tab list block 형식, 새창으로 이동 --> */}
          <div className="tab-wrap tab-moving" data-roll="tab" id="tab-2">
            <div className="tab-list-wrap ">
              <TabList
                selected={selected} setSelected={setSelected}
                tabMenu={tabMenu}
                tabList={tabList}
                handleSingleCheck={handleSingleCheck}
              />
              <span className="highlight"></span>
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
    <ul className="tab-list">
      {
        props.tabList.map(function(item, i){
          return (
            <li key={i} className={ props.selected === i ? "tab _is-active" : "tab"}>
              <a href="javascript:void(0);" target=""
                onClick={(e)=>{
                  props.tabMenu(i)
                  props.handleSingleCheck(e)
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
  // type: PropTypes.oneOf(['default', 'top', 'left', 'bottom']),
  
};

// Docs 기본값
TabMenu.defaultProps = {
  onChkBox : false
  // type: 'default',
};

