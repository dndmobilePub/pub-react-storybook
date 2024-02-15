import React, { useState } from 'react';

import InputBox from './stories/base/InputBox';
import Button from './stories/base/Button';

function InputBoxPage() {
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
            <li>setPage: Base, ResidentNum, phoneNum</li>
            <li>option: setPage, type, disabled, label, placeholder, fieldState, infoState, infoMsg, validMsg, inputType</li>
            <li>disabled: disabled true 적용</li>
          </ul>
        </div>
      )}
      <InputBox
        setPage="Base"
        type="text"
        label="기본형"
        placeholder="기본동장 INPUT"
        disabled={false}
        fieldState=''
        infoState={false}
        infoMsg=''
        validMsg=''
        inputType=''
      />
      <InputBox
        setPage="Base"
        type="text"
        label="clear btn 없음"
        placeholder="clear btn 없음"
        inputcase="exception"
      />
      <InputBox
        setPage="Base"
        type="text"
        label="Disable"
        placeholder="disabled"
        disabled
      />
      <InputBox
        setPage="Base"
        type="text"
        label="안내성 메세지"
        placeholder="placeholder"
        infoState={true}
        infoMsg="안내성 메세지"
      />
      <InputBox
        setPage="Base"
        type="text"
        label="text : valid"
        placeholder="placeholder"
        fieldState="valid"
        validMsg='오류체크 메세지 출력'
      />
      <InputBox
        setPage="Base"
        type="text"
        label="text : invalid"
        placeholder="placeholder"
        fieldState="invalid"
        validMsg='오류체크 메세지 출력'
      />
      <InputBox
        setPage="ResidentNum"
        type="number"
        label="주민등록번호"
        placeholder="생년월일 6자리"
        fieldState=""
      />
      <InputBox
        setPage="phoneNum"
        type="number"
        label="휴대폰번호 입력"
      />
    </div>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">Placeholder Type</h2>
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
              <li>setPage: LabelResidentNum, Label, LabelPhone, LabelPhoneAuto</li>
              <li>option: setPage, type, disabled, label, placeholder, fieldState, infoState, infoMsg, validMsg, inputType</li>
              <li>disabled: disabled true 적용</li>
            </ul>
          </div>
        )}
      <InputBox
        setPage="Label"
        type="text"
        label="Placeholder Type"
        placeholder=""
      />
      <InputBox
        setPage="LabelPhone"
        type="text"
        label="휴대폰번호 입력"
        placeholder=""
      />
      <InputBox
        setPage="LabelResidentNum"
        type="number"
        label="주민등록번호"
      />
      <InputBox
        setPage="LabelPhoneAuto"
        label="휴대폰번호 입력 : 자동 하이픈 생성"
      />
    </div>
    </>
  );
}

export default InputBoxPage;
