import React from 'react';

import InputBox from './stories/base/InputBox';
// import Table from './stories/base/Tbl';
// import TySwiper from './stories/base/Swiper';

function InputBoxPage() {
  
  
  return (
    <>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">기본형</h2>
      <InputBox
        label="기본형"
        setPage="Base"
        type="text"
        placeholder="기본동장 INPUT"
      />
      <InputBox
        label="clear btn 없음"
        setPage="Base"
        type="text"
        placeholder="clear btn 없음"
        inputcase="exception"
      />
      <InputBox
        label="Disable"
        setPage="Base"
        type="text"
        placeholder="disabled"
        disabled
      />
      <InputBox
        label="안내성 메세지"
        setPage="Base"
        type="text"
        placeholder="placeholder"
        infoMsg={true}
        InfoMessage="안내성 메세지"
      />
      <InputBox
        label="text : valid"
        setPage="Base"
        type="text"
        placeholder="placeholder"
        fieldState="valid"
        validMsg='오류체크 메세지 출력'
      />
      <InputBox
        label="text : invalid"
        setPage="Base"
        type="text"
        placeholder="placeholder"
        fieldState="invalid"
        validMsg='오류체크 메세지 출력'
      />
      <InputBox
        label="주민등록번호"
        setPage="residentNum"
        fieldState=""
        placeholder="생년월일 6자리"
        type="number"
      />
      <InputBox
        label="휴대폰번호 입력"
        setPage="phoneNum"
        type="number"
      />
    </div>
    <div className='cp-content'>
      <h2 className="cp-tit dep02">Placeholder Type</h2>
      <InputBox
        label="Placeholder Type"
        setPage="Label"
        type="text"
        placeholder=""
      />
      <InputBox
        label="휴대폰번호 입력"
        setPage="LabelPhone"
        type="text"
        placeholder=""
      />
      <InputBox
        label="주민등록번호"
        setPage="LabelResidentNum"
        fieldState=""
        type="number"
      />
      <InputBox
        label="휴대폰번호 입력 : 자동 하이픈 생성"
        setPage="LabelPhoneAuto"
      />
    </div>
    </>
  );
}

export default InputBoxPage;
