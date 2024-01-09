import React from 'react';
import PropTypes from 'prop-types';
import './../style/storyBook.scss'
import './../style/cm.common.scss';

/**
 * Primary UI component for user interaction
 */
export const Title = ({setPage}) => {  

  switch (setPage){

    case 'Basics':
    return (
      <div className="cp-content storybook">
        <h2 className="cp-tit dep02">TITLE : 기본형 , #333</h2>
        <div className="component">
          <h1 className="tit dep01">1depth : 22px</h1>
          <h2 className="tit dep02">2depth : 18px</h2>
          <h3 className="tit dep03">3depth : 16px</h3>
          <h4 className="tit dep04">4depth : 13px</h4>
          <h5 className="tit dep05">5depth : 12px</h5>
        </div>
        <div className="codeview"></div>
      </div>
    )

    case 'Exception':
    return (
      <div className='cp-content storybook '>
        <h2 className="cp-tit dep02">TITLE : 예외</h2>
        <div className="component">
          <h1 className="tit dep01">1depth : 22px</h1>
          <h2 className="tit dep02 type2">2depth : 18px, #2f65ee</h2>
          <h2 className="tit dep02"><span className="uline">2depth : 18px, line bg</span></h2>
        </div>
        <div className="codeview"></div>
      </div>
    )

    case 'Application':
    return (
      <div className="cp-content storybook type02">
        <h2 className="cp-tit dep02">TITLE : 예외</h2>
        <div className="hgroup split">
            <h2 className="tit dep02">2depth + 버튼</h2>
            <div className="col">
              <a href="#" className="btn btn-size bg s">버튼명1</a>
              <a href="#" className="btn btn-size bg s disabled" aria-disabled="disabled">버튼명2</a>
            </div>
        </div>

        <hr className="hr divice" aria-hidden="true"/>           

        <div className="hgroup split">
          <h2 className="tit dep02">2depth + 버튼</h2>
          <div className="col">
            <a href="#" className="btn btn-size s txt">버튼명1</a>
            <a href="#" className="btn btn-size s txt disabled" aria-disabled="disabled">버튼명2</a>
          </div>
        </div>

        <hr className="hr divice" aria-hidden="true"/>           

        <div className="hgroup split">
          <h2 className="tit dep02">2depth + 기준텍스트</h2>
          <div className="col">
              <span className="cmt">(단위 : 천원)</span>
          </div>
        </div>

        <hr className="hr divice" aria-hidden="true"/>           

        <h2 className="tit dep02">
          <p className="tit sub">2depth 서브타이틀</p>
          2depth 메인타이틀
        </h2>

        <hr className="hr divice" aria-hidden="true" />
        
        <h2 className="tit dep02">                        
          2depth 메인타이틀
          <p className="headcopy">
          청춘의 예수는 인간의 것은 봄바람이다. 생명을 것은 없으면 되려니와, 것은 아름다우냐? 대중을 위하여, 힘차게 이것이다.</p>
        </h2>
        <div className="codeview"></div>
      </div>
    )

    case 'Text':
    return (
      <div className="cp-content storybook type02">
        <h2 className="cp-tit dep02">TEXT</h2>
        <div className="component">
          <p className="txt">보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.<br/>
          이는 주는 동력은 이상 보이는 봄바람이다. 불어 보배를 대중을 가지에 자신과 그들은 위하여 쓸쓸하랴? 그것은 같이 희망의 있는가?<br/>
          청춘의 예수는 인간의 것은 봄바람이다. 생명을 것은 없으면 되려니와, 것은 아름다우냐? 대중을 위하여, 힘차게 이것이다.</p>

          <p data-lang="en" lang="en" className="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ratione dolore saepe debitis consectetur ad veritatis inventore placeat, esse ab et blanditiis, dolor ex numquam! Nihil praesentium quae eos quidem.</p>
        </div>
        <div className="codeview"></div>
      </div>
    )
    case 'Text: ellipsis':
    return (
      <div className='cp-content storybook type02'>
        <h2 className="cp-tit dep02">TEXT : ellipsis</h2>
        <div className="component">
          <p className="txt txt-elp1">ellipsis - Line1 : 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.</p>
          <p className="txt txt-elp2">ellipsis - Line2 : 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.</p>            
          <p className="txt txt-elp3">ellipsis - Line3 : 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.</p>
        </div>
        <div className="codeview"></div>

      </div>
    )

    case 'List':
    return (
      <div className="cp-content storybook ">
        <h2 className="cp-tit dep02">LIST</h2>
        <p className="tit01">타이틀 스타일1 .tit01</p>
        <p className="tit02">타이틀 스타일2 .tit02</p>
        <p className="tit03">타이틀 스타일3 .tit03</p>
        <p className="tit04">타이틀 스타일4 .tit04</p>
        <p className="tit05">타이틀 스타일5 .tit05</p>

        <ul className="list01">
          <li>리스트 스타일 .list01</li>
          <li>리스트 스타일 .list01
            <ul>
                <li>리스트 SUB 스타일</li>
                <li>리스트 스타일</li>
            </ul>
          </li>
        </ul>
        <ul className="list01">
          <li><span className="tit">제목</span>ul 리스트 스타일 변형 .list01 .tit</li>
          <li><span className="tit">제목</span>ul 리스트 스타일 변형 .list01 .tit
            <ul>
              <li>리스트 SUB 스타일</li>
              <li>리스트 스타일</li>
            </ul>
          </li>
        </ul>
        <ol className="list02">
          <li>숫자리스트 스타일 .list02</li>
          <li>숫자리스트 스타일 .list02
            <ol className="circle-num">
              <li>라운드 숫자리스트 .circle-num</li>
              <li>라운드 숫자리스트 .circle-num</li>
              <li>라운드 숫자리스트 .circle-num</li>
            </ol>
          </li>
          <li>숫자리스트 스타일 .list02</li>
          <li>숫자리스트 스타일 .list02</li>
          <li>숫자리스트 스타일 .list02</li>
        </ol>

        <ol className="step step-box">
          <li>리스트스타일 .step</li>
          <li>리스트스타일 .step
            <ul className="bul">
              <li>리스트 SUB 스타일 .bul</li>
              <li>리스트 스타일 .bul</li>
              <li>리스트 스타일 .bul</li>
            </ul>
          </li>
          <li>리스트스타일 .step</li>
          <li>리스트스타일 .step</li>
        </ol>

      </div>
    )



  }
};

// Docs 문서 작성 영역
Title.propTypes = {
 
};

// Docs 기본값
Title.defaultProps = {

};

