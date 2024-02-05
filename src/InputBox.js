import React, { useEffect } from 'react';

import InputBox from './stories/base/InputBox';
// import Table from './stories/base/Tbl';
// import TySwiper from './stories/base/Swiper';

function InputBoxPage() {
  
  
  return (
    <div style={{width: '500px'}}>
      <InputBox
        label="기본형"
        setPage="Base"
        fieldState=""
        placeholder="기본동장 INPUT"
        type="text"
      />
      <InputBox
        label="기본형"
        setPage="Base"
        fieldState=""
        placeholder="기본동장 INPUT"
        type="text"
      />
      <InputBox
        label="Disable"
        setPage="disable"
        disabled
        placeholder="disabled"
        type="text"
      />
      <InputBox
        label="안내성 메세지"
        setPage="infoMsg"
        errMsg
        placeholder="placeholder"
        type="text"
        InfoMessage="안내성메세지"
      />
      <InputBox
        label="text : valid"
        setPage="validState"
        errMsg
        fieldState="valid"
        placeholder="placeholder"
        type="text"
        InfoMessage="입력값의 유효성이 정상입니다."
      />
      <InputBox
        label="text : invalid"
        setPage="validState"
        errMsg
        fieldState="invalid"
        placeholder="placeholder"
        type="text"
        InfoMessage="오류체크 메시지 출력"
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
      />
      <InputBox
        label="Placeholder Type"
        setPage="Placehoder"
        fieldState=""
        placeholder="default"
        type="text"
      />
    </div>
  );
}

export default InputBoxPage;
