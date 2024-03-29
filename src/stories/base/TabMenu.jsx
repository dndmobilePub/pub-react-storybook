import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.tab.scss';
import './scss/storyBook.scss';


/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 * postion - tabmenu 가운데 정렬
 * poLine - tabmenu line 위치 (top/bottom)
 * direction - tabmenu 방향(가로 horizontal/세로 vertical)
 */

/** 
 * TabMenu 컴포넌트 정의
 */
export const TabMenu = ({ setPage, postion, poLine, direction }) => {

  const Postion = postion === 'center' ? 'tab-center' : ''
  const PoLine = poLine === 'top' ? 'tab-line-top' : ''
  const Direction = direction === 'horizontal' ? '' : 'tab-vertical'

 
  // 탭메뉴 개수
  let [tabList] = useState([...new Array(5)].map((_, i) => i + 1))
   
  // 탭메뉴 index
  let [selected, setSelected] = useState(0)
  // 탭 line 위치 값
  let [ linePo, setLinePo ] = useState(0)
  let [ cenLinePo, setCenLinePo ] = useState(0)

  // direction 값
  let [directionPo, setDirectionPo ] = useState()
 
  console.log(directionPo)
  // 탭 선택
  const tabMenu = (i) => {
    setSelected(i)
  }

  // 탭 라인 위치값 구하기 
  let tabLineCheck = (e, i) => {
    // console.log(e.target.getBoundingClientRect().width)
    let check = e.target.getBoundingClientRect().width
    console.log(check)
    if( postion === 'center'){
      let co = cenLinePo + (20 * i) + (check * i)
      console.log(co)
      setLinePo(co)
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

    case 'TabDirection':
      
    return ( 
      <div className='cp-content storybook'>
        <h2 className="cp-tit dep02">가로 / 세로 / 액션</h2>
        <div className="tab-wrap sel-h-v" data-roll="tab">
					<div className="tab-list-wrap">
						<TabListDirection 
              tabMenu={tabMenu} selected={selected} 
              setDirectionPo={setDirectionPo}
            />
					</div>
				</div>
        <div className={"tab-wrap tab-moving " + Direction + ' tab-'+ directionPo} data-roll="tab" id="tab-4" 
          style={{
            width : 400,
            maxWidth : 100 + '%'
          }}
          >
					<div className="tab-list-wrap">
						<ul className="tab-list">
							<li className="tab _is-active"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 01</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 02</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 03</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 04</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 05</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 06</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 07</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 08</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 09</a></li>
							<li className="tab"><a href="#/" onClick={(e)=> e.preventDefault()}>Tab 10</a></li>
						</ul>
					</div>
					<div className="tab-contents-wrap">
						<div className="tab-contents _is-active">
							<h3 className="hide">Tab 01</h3>
							tab-4_1
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 02</h3>
							tab-4_2
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 03</h3>
							tab-4_3
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 04</h3>
							tab-4_4
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 05</h3>
							tab-4_5
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 06</h3>
							tab-4_6
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 07</h3>
							tab-4_7
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 08</h3>
							tab-4_8
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 09</h3>
							tab-4_9
						</div>
						<div className="tab-contents">
							<h3 className="hide">Tab 10</h3>
							tab-4_10
						</div>
					</div>
				</div>

      </div>
    )
    default:
  }
};


function TabList(props){
  return(
    <ul className="tab-list" id="tabList">
      {
        props.tabList.map(function(item, i){
          return (
            <li key={i} className={ props.selected === i ? "tab _is-active" : "tab"}>
              <a href="#/" target=""
                onClick={(e)=>{
                  e.preventDefault()
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
  },[props.postion, props])

  return(
    <ul className="tab-list" id="tabList">
      {
        props.tabList.map(function(item, i){
          return (
            <li id={'tab_' + i} key={i} className={ props.selected === i ? "tab _is-active" : "tab"}>
              <a href="#/" target=""
                onClick={(e)=>{
                  e.preventDefault()
                  props.tabMenu(i)
                  props.tabLineCheck(e, i)
                }}
              > 
              {
                i === 2 ? ('Tab Tab 0' + props.tabList[i]) : ('Tab 0' + props.tabList[i])
              }
              
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

function TabListDirection(props){
  // 탭메뉴 개수
  let [tabList] = useState([
    { id: 0, direction : 'horizontal'},{ id: 1, direction : 'vertical'}
  ])
  return(
    <ul className="tab-list">
      {
        tabList.map(function(item, i){
          return(
            <li key={i} 
                className={ props.selected === i ? "tab _is-active" : "tab"} 
                data-type={tabList[i].direction}
                onClick={()=>{
                  props.tabMenu(i)
                  props.setDirectionPo(tabList[i].direction)
                }}
            >
              <a href="#/" onClick={(e)=> e.preventDefault()}>{tabList[i].direction}</a>
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
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
      
  };

  // Docs 기본값
  TabMenu.defaultProps = {
    poLine : 'default',
    postion : 'default',
    direction : 'horizontal'
  };

 

