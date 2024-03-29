import React, { useEffect, useState} from 'react';
// import PropTypes, { func } from 'prop-types';

// scss&css import
import './scss/cm.common.scss';
import './scss/_cp.accodion.scss';
import './scss/storyBook.scss';
import { element } from 'prop-types';


/** 
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 * onChkBox - checkbox show/hide
 */

/** 
 * Accordion 컴포넌트 정의
 */

export const Accordion = ({setPage, onChkBox}) => {
  
  let [data] = useState([
    {title : '아코디언 제목입니다', subT : '아코디언 내용입니다'},
    {title : '아코디언 제목입니다', subT : '아코디언 내용입니다'},
    {title : '아코디언 제목입니다', subT : '아코디언 내용입니다'},
    {title : '아코디언 제목입니다', subT : '아코디언 내용입니다'}
  ])

  let [selected, setSelected] = useState(null)
  // 임시 data 배열 길이 만큼 배열길이 
  let [sub, setSub] = useState(new Array(data.length).fill(false))

  // 아코디언 기본형
  const bassToggle = (i) => {
      let arr = [...sub]
      if( arr[i] === true){
        arr[i] = false;
      } else {
        arr[i] = true;
      }
      setSub(arr)
  }

  // 스크롤Y 값
  let [ScrollY, setScrollY] = useState(0)

  let handleScroll = (e) =>{
    // 선택한 요소 top 값 
    let data = e.target.getBoundingClientRect().top
    // 선택한 요소 값 + 브라우저 위치 값
    let count = data + window.pageYOffset
    setScrollY(count)      
  }
  // ScrollY 값이 변할때마다 0.1초 후 실행
  useEffect(()=>{
    setTimeout(()=>{
      window.scrollTo({
        top : ScrollY,
        behavior: "smooth"
      })
    }, 100)
  },[ScrollY])

  // 하나만 열림
  const OneOpentoggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }  

  // CheckBox 아코디언
  const CheckBoxToggle = (i) => {
    let arr = [...sub]
    if( arr[i] === true){
      arr[i] = false;
    } else {
      arr[i] = true;
    }
    setSub(arr)
  }  
  
  // checkbox 가 checkd가 되었을때 닫기
  const IsChecked = (e) => {
    let id =(e.currentTarget.id)
    let arr = [...sub]
    if( arr[id] === false){
      arr[id] = true;
    } else {
      arr[id] = false;
    }
    setSub(arr)
  }


  // 체크된 체크박스 담을 배열
  let [checkItem, setCheckItem] = useState([])
  let checkList = [{id : 0},{id : 1},{id : 2}]
  // console.log(checkItem)
  
  // 체크박스 단일 선택 
  let handleSingleCheck = (id, num, name, checked) => {
    let checkArr = [...checkItem]
    
    // console.log(id, num, name, checked)
    if(checked){

      let user = {groupId : id, name : name , checked : checked}
      
      // 단일 선택시 체크된 아이템 배열 추가
      // checkArr[id]
      console.log(user)
      checkArr.push(user)
      console.log(checkArr)
      setCheckItem(checkArr);
    

    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      let removeArr = checkArr.filter(( item ) => item.name !== name)
      console.log(removeArr)
      setCheckItem()

    }
  } 




  // 체크박스 전체 선택
  let handleAllCheck = (e) =>{
    if(e.target.checked){
      setCheckItem(checkList.map((item) => item.id))
    } else {
      setCheckItem([])
    }
  }

  // checkItem 길이가 3개면 아코디언 닫기
  useEffect(()=>{
    if(checkItem.length === 3){
      setSub(new Array(data.length).fill(true))
    } else {
      setSub(new Array(data.length).fill(false))
      
    }
  },[checkItem, data])

  switch (setPage){
    case 'Base':
    return ( 
      <div className='cp-content storybook'>
        <div className="field">
					<div className="accordion-wrap">
            <BaseData 
              data={data}
              onChkBox={onChkBox} 
              sub={sub} setSub={setSub} 
              bassToggle={bassToggle} 
              selected={selected} setSelected={setSelected}
            />            
					</div>
				</div>
      </div>
    )
    case 'ScrollTop':
    return ( 
      <div className='cp-content storybook'>
        <div className="field">
					<div className="accordion-wrap">
            <ScrollTopData 
              data={data}
              onChkBox={onChkBox} 
              sub={sub} setSub={setSub}
              handleScroll={handleScroll} bassToggle={bassToggle}  
              selected={selected} setSelected={setSelected}
            />                            
            <SampleDummy data={data}/>                            
            <SampleDummy data={data}/>                            
            <SampleDummy data={data}/>                            
          </div>
				</div>
      </div>
    )
    case 'OneOpen':
    return ( 
      <div className='cp-content storybook'>
        <div className="field">
					<div className="accordion-wrap">
            <OneOpenData 
              data={data}
              onChkBox={onChkBox} 
              sub={sub} setSub={setSub}
              handleScroll={handleScroll}  
              OneOpentoggle={OneOpentoggle}  
              selected={selected} setSelected={setSelected}
            />                            
          </div>
				</div>
      </div>
    )
    case 'BtnChangeColor':
    return ( 
      <div className='cp-content storybook'>
        <div className="field">
					<div className="accordion-wrap">
          <BtnChangeColorData 
            data={data} 
            onChkBox={onChkBox} 
            sub={sub} setSub={setSub} 
            bassToggle={bassToggle} 
            selected={selected} setSelected={setSelected}
          />
          </div>
				</div>
      </div>
    )
    case 'CheckBoxToggle':
    return ( 
      <div className='cp-content storybook'>
        <div className="field">
          <div className="accordion-wrap">
            <CheckBoxToggleData
              IsChecked={IsChecked} 
              onChkBox={onChkBox} 
              sub={sub} setSub={setSub} 
              CheckBoxToggle={CheckBoxToggle} 
              data={data} 
              selected={selected} setSelected={setSelected}
            />
          </div>
        </div>
      </div>
    )
    case 'CheckBoxAllToggle':
    return ( 
      <div className='cp-content storybook'>
        <div className="field">
          <div className="accordion-wrap">
          <MyComponent/>
            <CheckBoxAllData 
              IsChecked={IsChecked}
              checkList= {checkList}
              onChkBox={onChkBox} 
              sub={sub} setSub={setSub} 
              CheckBoxToggle={CheckBoxToggle} 
              data={data} 
              selected={selected} setSelected={setSelected}
              checkItem={checkItem}
              handleSingleCheck={handleSingleCheck}
              handleAllCheck={handleAllCheck}
            />
          </div>
        </div>
      </div>
    )
    case 'ToggleInToggle':
    return ( 
      <div className={'cp-content storybook ' + setPage} >
        <div className="field">
          <div className="accordion-wrap">
            <ToggleInToggleData
              onChkBox={onChkBox} 
              sub={sub} setSub={setSub} 
              bassToggle={bassToggle} 
              data={data} 
              selected={selected} 
              setSelected={setSelected}
            />            
          </div>
        </div>
      </div>
    )
    default:

  }
};

// Base
function BaseData(props){
  return(
    <>
      {
        props.data.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt
                data-index={i} 
                className={ 
                  props.onChkBox === true ? 
                  "accordion-header flex square" : "accordion-header" 
                }
              >
                {
                  props.onChkBox === true ? <CheckBoxBase /> :  null
                }
                
                <a href="#/" 
                  className={ props.sub[i] === true ? "toggle-tit btn-toggle _is-active" : "toggle-tit btn-toggle"} 
                  aria-expanded={ props.sub[i] === true ? 'false' : 'true'} 
                  aria-label={ props.sub[i] === true ? '열기' : '닫기'}
                  onClick={(e)=> { e.preventDefault()
                    props.bassToggle(i)
                  }}
                >
                  <span>{"기본형 : " + props.data[i].title}</span>
                </a>
              </dt>
              <dd className={ 
                  props.sub[i] === true ? "accordion-contents active" : "accordion-contents"
                }
                >
                  <div>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                  </div>
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}

// ScrollTop
function ScrollTopData(props){

  return(
    <>
      {
        props.data.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt className={ props.onChkBox === true ? "accordion-header flex square" : "accordion-header" }
                data-index={i}
                >
                {
                  props.onChkBox === true ? <CheckBoxBase /> :  null
                }
                <a href="#/" 
                  className={ props.sub[i] === true ? "toggle-tit btn-toggle _is-active" : "toggle-tit btn-toggle"} 
                  aria-expanded={ props.sub[i] === true ? 'false' : 'true'} 
                  aria-label={ props.sub[i] === true ? '열기' : '닫기'}
                  onClick={(e)=> {
                    e.preventDefault()
                    props.bassToggle(i)
                    props.handleScroll(e)
                  }}
                >
                  <span>{"스크롤탑 : " +props.data[i].title}</span>
                </a>
              </dt>
              <dd className={ 
                  props.sub[i] === true ? "accordion-contents active" : "accordion-contents"
                }
                >
                  <div>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                  </div>
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}

// OneOpen
function OneOpenData(props){
  return(
    <>
      {
        props.data.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt className={ props.onChkBox === true ? "accordion-header flex square" : "accordion-header" }
                data-index={i}
                >
                {
                  props.onChkBox === true ? <CheckBoxBase /> :  null
                }
                <a href="#/" 
                  className={ props.selected === i ? "toggle-tit btn-toggle _is-active" : "toggle-tit btn-toggle"} 
                  aria-expanded={ props.selected === i ? 'false' : 'true'} 
                  aria-label={ props.selected === i ? '열기' : '닫기'}
                  onClick={(e)=> {
                    e.preventDefault()
                    props.OneOpentoggle(i)
                  }}
                >
                  <span>{"하나만 열림 : " +props.data[i].title}</span>
                </a>
              </dt>
              <dd className={ 
                  props.selected === i ? "accordion-contents active" : "accordion-contents"
                }
                >
                  <div>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                  </div>
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}

// BtnChangeColor
function BtnChangeColorData(props){
  return(
    <>
      {
        props.data.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt className={ props.onChkBox === true ? "accordion-header flex square" : "accordion-header" }
                data-index={i}
                >
                {
                  props.onChkBox === true ? <CheckBoxBase /> :  null
                }
                <span className="toggle-tit ">{"버튼만 토글 : " + props.data[i].title}</span>
                <a href="#/" 
                  className={ props.sub[i] === true ? "btn-toggle btn-act-orange _is-active" :  "btn-toggle btn-act-orange"} 
                  aria-expanded={ props.sub[i] === true ? 'false' : 'true'} 
                  aria-label={ props.sub[i] === true ? '열기' : '닫기'}
                  onClick={(e)=> {
                    e.preventDefault()
                    props.bassToggle(i)
                  }}
                >
                  
                </a>
              </dt>
              <dd className={ 
                  props.sub[i] === true  ? "accordion-contents active" : "accordion-contents"
                }
                >
                  <div>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                  </div>
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}

// CheckBoxToggle
function CheckBoxToggleData(props){
  return(
    <>
      {
        props.data.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt className={ props.onChkBox === true ? "accordion-header flex square" : "accordion-header" }
                data-index={i}
                >
                {
                  props.onChkBox === true ? <CheckBox i={i} IsChecked={props.IsChecked}/> :  null
                }
                <a href="#/" 
                  className={ props.sub[i] === true ? "btn-toggle toggle-tit _is-active" :  "btn-toggle toggle-tit"} 
                  aria-expanded={ props.sub[i] === true ? 'false' : 'true'} 
                  aria-label={ props.sub[i] === true ? '열기' : '닫기'}
                  onClick={(e)=> {
                    e.preventDefault()
                    props.CheckBoxToggle(i)
                  }}
                >
                <span>{"버튼만 토글 : " + props.data[i].title}</span>
                </a>
              </dt>
              <dd className={ 
                  props.sub[i] === false  ? "accordion-contents active" : "accordion-contents"
                }
                >
                  <div>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                    <p>{props.data[i].subT}</p>
                  </div>
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}


// CheckBoxAllToggle
function CheckBoxAllData(props){

  // 배열 하나로 수정
  let cArr = [...props.data]
  // cArr = cArr.slice(1,2)

  return(
    <>
      {
        cArr.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt className={ props.onChkBox === true ? "accordion-header flex square" : "accordion-header" }
                data-index={i}
                >
                {
                  props.onChkBox === true ? 
                  
                  <label className="field-checkbox">
                    <input type="checkbox"
                      name={'exChkAll_' + i} 
                      onChange={(e)=>{
                        props.handleAllCheck(e)
                        props.IsChecked(e)
                      }}
                      checked={ props.checkItem.length === 3 ? true : false}
                    />
                    <i className="field-icon"></i>
                    <span className="field-label">동의</span>
                  </label>
                  
                  :  null
                }
                <a href="#/" 
                  className={ props.sub[i] === true ? "btn-toggle toggle-tit _is-active" :  "btn-toggle toggle-tit"} 
                  aria-expanded={ props.sub[i] === true ? 'false' : 'true'} 
                  aria-label={ props.sub[i] === true ? '열기' : '닫기'}
                  onClick={(e)=> {
                    e.preventDefault()
                    props.CheckBoxToggle(i)
                  }}
                >
                  <span>{"버튼만 토글 : " + props.data[i].title}</span>
                </a>
              </dt>
              <dd className={ 
                  props.sub[i] === false  ? "accordion-contents active" : "accordion-contents"
                }
                >
                  <div>
                    <CheckList 
                      accArr={i}
                      checkList={props.checkList}
                      sub={props.sub} 
                      handleSingleCheck={props.handleSingleCheck}
                      checkItem={props.checkItem}
                    />
                  </div>
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}

// Base
function ToggleInToggleData(props){

  let [toggleData] = useState([
    {title : '아코디언 제목입니다', subT : '아코디언 내용입니다'},
    {title : '아코디언 제목입니다', subT : '아코디언 내용입니다'},
  ])

  let [toggleSelected, setToggleSelected] = useState(null)
  // 임시 data 배열 길이 만큼 배열길이 
  let [toggleSub, setToggleSub] = useState(new Array(toggleData.length).fill(false))

  const Toggle3 = (i) => {
      let arr = [...toggleSub]
      if( arr[i] === true){
        arr[i] = false;
        
      } else {
        arr[i] = true;
      }
      setToggleSub(arr)
  }



  return(
    <>
      {
        props.data.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt className={ props.onChkBox === true ? "accordion-header flex square" : "accordion-header" }
                data-index={i}
                >
                {
                  props.onChkBox === true ? <CheckBoxBase /> :  null
                }
                
                <a href="#/" 
                  className={ props.sub[i] === true ? "toggle-tit btn-toggle _is-active" : "toggle-tit btn-toggle"} 
                  aria-expanded={ props.sub[i] === true ? 'false' : 'true'} 
                  aria-label={ props.sub[i] === true ? '열기' : '닫기'}
                  onClick={(e)=> {
                    e.preventDefault()
                    props.bassToggle(i)
                  }}
                >
                  <span>{"기본형 : " + props.data[i].title}</span>
                </a>
              </dt>
              <dd className={ 
                props.sub[i] === true ? "accordion-contents be-after active" : "accordion-contents be-after"
              }
                style={{
                    padding : props.sub[i] === true ? '0em 2rem' : '0rem 2rem',
                    borderTop : props.sub[i] === true ? '1px solid #ccc' : '0px solid #ccc',
                  }
                }
              >
                <ToggleInToggle 
                  Toggle3={Toggle3}
                  toggleData={toggleData}
                  toggleSub={toggleSub} setToggleSub={setToggleSub}
                  toggleSelected={toggleSelected} setToggleSelected={setToggleSelected}
                />
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}


function CheckBoxBase(props){
  return(
    <>
      <label className="field-checkbox">
        <input type="checkbox" />
        <i className="field-icon"></i>
        <span className="field-label">동의</span>
      </label>
    </>
  )
}

function CheckBox(props){
  return(
    <>
      <label className="field-checkbox">
        <input id={props.i} type="checkbox" onChange={(e)=>{
          props.IsChecked(e)
        }}/>
        <i className="field-icon"></i>
        <span className="field-label">동의</span>
      </label>
    </>
  )
}


//스크롤용 기능X
function SampleDummy(props){
  return(
    <>
      {
        props.data.map(function(item, i){
          return(
            <dl className="accordion" key={i}>
              <dt className="accordion-header"
                data-index={i}
                >
                <a href="#/" 
                  className="toggle-tit btn-toggle" 
                  onClick={(e) => e.preventDefault()}
                >
                  <span>더미</span>
                </a>
              </dt>
              <dd className="accordion-contents">
                <div>
                  <p>{props.data[i].subT}</p>
                  <p>{props.data[i].subT}</p>
                  <p>{props.data[i].subT}</p>
                  <p>{props.data[i].subT}</p>
                </div>
              </dd>
            </dl>
          )
        })
      }
    </>
  )
}


function CheckList(props){
  return(
    <>
      {
        props.checkList.map(function(item, i){
          return(
              <div className="c-line"
                  key={i}    
                  style={{
                    marginTop : i >= 1 ? 20 : null
                  }}
                >
                <label className="field-checkbox">
                  <input type="checkbox" name={'ekm'+ props.accArr + '_' +item.id} id={'ekm'+ props.accArr + '_' + item.id}
                    onChange={(e)=>{ 
                      props.handleSingleCheck(props.accArr, i, e.target.name, e.target.checked ) 
                      // console.log(props.accArr)
                    }}
                    checked={props.checkItem.includes('ekm'+ props.accArr + '_' +item.id) ? true :false}
                  />
                  <i className="field-icon"></i>
                  <span className="field-label">아코디언 내용입니다</span>
                </label>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
              </div>
          )
        })
      }
    </>
  )
}


function ToggleInToggle(props){
  return(
    <div className="accordion-wrap" data-scroll="top">
      {
        props.toggleData.map(function(item, i){
          return(
            <dl className="accordion">
              <dt className="accordion-header">
                <a href="#/" 
                  className={ props.toggleSub[i] === true ? "toggle-tit btn-toggle _is-active" : "toggle-tit btn-toggle"} 
                  aria-expanded={ props.toggleSub[i] === true ? 'false' : 'true'} 
                  aria-label={ props.toggleSub[i] === true ? '열기' : '닫기'}
                  onClick={(e)=> {
                    e.preventDefault()
                    props.Toggle3(i)
                  }}
                >
                  <span>아코디언 제목입니다</span>
                </a>
              </dt>
              <dd className={ 
                props.toggleSub[i] === true ? "accordion-contents active" : "accordion-contents"
              }
              >
                <div>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                </div>
              </dd>
            </dl>

          )
        })
      }
    </div>
  )
}


// Docs 문서 작성 영역
Accordion.propTypes = {
  /**
   * tooltip 방향 설정
   */
  // type: PropTypes.oneOf(['default', 'top', 'left', 'bottom']),
  
};

// Docs 기본값
Accordion.defaultProps = {
  onChkBox : false
  // type: 'default',
};



function MyComponent() {
  // 배열 상태 초기화
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // 선택한 값 제거 함수
  const removeItem = (valueToRemove) => {
    // filter를 사용하여 valueToRemove를 제외한 새 배열 생성
    setItems(items.filter(item => item !== valueToRemove));
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item} >
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}