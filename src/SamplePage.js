import React, { useEffect } from 'react';
import logo from './stories/assets/logo_dndm.png';
import './App.css';

import InputBox from './stories/base/InputBox';
import Table from './stories/base/Tbl';
import TySwiper from './stories/base/Swiper';

function SamplePage() {
  
  return (
    <div className="App">
      <section className="App-container">
        <div style={{width:'500'}}>
          <InputBox
            fieldState=""
            label="text default1"
            placeholder="default"
            setPage="Base"
            type="text"
          />
          <InputBox
            fieldState=""
            label="text default2"
            placeholder="default2"
            setPage="Base"
            type="text"
          />
          <InputBox
            disabled
            label="text default3"
            placeholder="disabled"
            setPage="disable"
            type="text"
          />
          <InputBox
            errMsg
            label="text default4"
            fieldState="valid"
            placeholder="placeholder"
            setPage="validState"
            type="text"
          />
          <InputBox
            fieldState=""
            label="주민등록번호"
            placeholder="생년월일 6자리"
            setPage="residentNum"
            type="number"
          />
          <InputBox
            label="휴대폰번호 입력"
            setPage="phoneNum"
          />
          <InputBox
            fieldState="invalid"
            label="text default5"
            placeholder="default"
            setPage="Placehoder"
            type="text"
          />
        </div>
      </section>
    </div>
  );
}

export default SamplePage;
