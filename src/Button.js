import React, { useState } from 'react';
import Button from './stories/base/Button';
import ALink from './stories/base/ALink';

function ButtonPage() {
  const [activeButton, setActiveButton] = useState({});

  const optClick = (opt) => {
    const updatedActiveButton = { ...activeButton };
  
    // 클릭된 버튼의 활성화 상태를 토글
    updatedActiveButton[opt] = !updatedActiveButton[opt];
  
    // 모든 버튼의 활성화 상태를 갱신
    Object.keys(updatedActiveButton).forEach(key => {
      if (key !== opt) {
        updatedActiveButton[key] = false; // 클릭된 버튼이 아닌 경우 비활성화
      }
    });
  
    setActiveButton(updatedActiveButton);
  };
  

  return (
    <>
      <section className="cp-content">
        <h2 className="cp-tit dep02">텍스트 링크</h2>
        <div className="component">
          <h3 className="cp-tit dep03">텍스트링크</h3>
          <div className="btnWrap">
            <Button
              label={activeButton['opt1'] ? '도움말 닫기' : '도움말 열기'}
              onClick={() => optClick('opt1')}
              setPage="1st"
              size="xs"
              style="shadow"
              btnAddClass={`cp-btn ${activeButton['opt1'] ? '_is-active' : ''}`}
            />
          </div>
          {activeButton['opt1'] && (
            <div className="sb-guide descWrap">
              <p className="desc">* 링크 옵션 스토리북 참고</p>
              <ul className="sb-lst desc">
                <li>setPage: txtDefault, txtLine, txtArrow</li>
                <li>disabled: disabled true 적용</li>
              </ul>
            </div>
          )}
          <div className="btnWrap">
            <ALink label="기본링크" onClick={() => {}} setPage="txtDefault" />
            <ALink label="라인링크" onClick={() => {}} setPage="txtLine" />
            <ALink label="링크+화살표" onClick={() => {}} setPage="txtArrow" />
          </div>
        </div>
      </section>
      <section className="cp-content">
        <h2 className="cp-tit dep02">Button : 기본형</h2>
        <div className="component">
          <h3 className="cp-tit dep03">버튼 기본형</h3>
          <div className="btnWrap">
            <Button
              label={activeButton['opt2'] ? '도움말 닫기' : '도움말 열기'}
              onClick={() => optClick('opt2')}
              setPage="1st"
              size="xs"
              style="shadow"
              btnAddClass={`cp-btn ${activeButton['opt2'] ? '_is-active' : ''}`}
            />
          </div>
          {activeButton['opt2'] && (
            <div className="sb-guide descWrap">
              <p className="desc">* 링크 옵션 스토리북 참고</p>
              <ul className="sb-lst desc">
                <li>setPage: txtDefault, txtLine, txtArrow</li>
                <li>disabled: disabled true 적용</li>
              </ul>
            </div>
          )}
          <div className="btnWrap">
            <Button label="기본BTN" onClick={() => {}} setPage="1st" style="normal" />
            <Button label="긍정BTN" onClick={() => {}} setPage="2nd" style="normal" />
            <Button label="부정BTN" onClick={() => {}} setPage="3rd" style="line" />
            <Button label="라인BTN" onClick={() => {}} setPage="1st" style="line" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ButtonPage;
