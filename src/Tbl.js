import React from 'react';

import Table from './stories/base/Tbl';

function TablePage() {
  
  
  return (
    <div className='cp-content'>
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
