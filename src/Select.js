import React, { useState } from 'react';

import Select  from './stories/base/Select';
import Button from './stories/base/Button';

function SelectPage() {
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
    <div className='cp-content'>
      <h2 className="cp-tit dep02">기본형</h2>
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
            <li>setPage: Base</li>
            <li>option: setPage, disabled</li>
            <li>disabled: disabled true 적용</li>
          </ul>
        </div>
      )}
      <Select 
        setPage="Base"
        label="기본형"
      />
    </div>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">INPUT MIX</h2>
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
            <li>setPage: Email</li>
            <li>option: setPage, type, disabled, label, placeholder, fieldState, infoState, infoMsg, validMsg, inputType</li>
            <li>disabled: disabled true 적용</li>
          </ul>
        </div>
      )}
      <Select
        setPage="Email"
        type="text"
        label="이메일"
        placeholder="이메일"
        infoMsg="안내성 메세지"
        validMsg="오류체크 메세지 출력"
      />
    </div>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">UI SELECT</h2>
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
            <li>setPage: UI select</li>
            <li>option: setPage, type, disabled, label, placeholder, fieldState, infoState, infoMsg, validMsg, inputType</li>
            <li>disabled: disabled true 적용</li>
          </ul>
        </div>
      )}
      <Select
        setPage="UI select"
        type="text"
        label="휴대폰번호 입력"
        placeholder="휴대폰번호 입력"
        infoMsg="안내성 메세지"
        validMsg="오류체크 메세지 출력"
      />
    </div>
    </>
  );
}

export default SelectPage;
