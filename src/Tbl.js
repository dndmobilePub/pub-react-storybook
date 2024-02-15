import React, { useState } from 'react';

import Table from './stories/base/Tbl';
import Button from './stories/base/Button';

function TablePage() {
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
            <li>setPage: Base, InnerTbl, TitleTbl, ScopeTbl</li>
            <li>option: setPage, captionState, caption, dataTblTitle</li>
          </ul>
        </div>
      )}
      <Table
        caption="기존 caption을 그대로 보여줘"
        captionState
        dataTblTitle="테이블 제목을 작성함"
        setPage="Base"
      />
      <Table
        caption="기존 caption을 그대로 보여줘"
        captionState
        dataTblTitle="테이블 제목을 작성함"
        setPage="Base"
      />
      <Table setPage="InnerTbl" />
      <Table
        caption="기존 caption을 그대로 보여줘"
        captionState
        dataTblTitle="테이블 제목을 작성함"
        setPage="TitleTbl"
      />
      <Table
        caption="기존 caption을 그대로 보여줘"
        captionState
        setPage="ScopeTbl"
      />
    </div>
  );
}

export default TablePage;
