import { Table } from './Tbl';

export default {
  // 카테고리 Table
  title: 'ver_0.0/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} ;


export const Base = {
  args: {
    setPage : 'Base',
    captionState : true,
    caption: '기존 caption을 그대로 보여줘',
    dataTblTitle: '테이블 제목을 작성함'
  }
};

export const InnerTbl = {
  args: {
    setPage : 'InnerTbl',
  }
};

export const TitleTbl = {
  args: {
    setPage : 'TitleTbl',
    captionState : true,
    caption: '기존 caption을 그대로 보여줘',
    dataTblTitle: '테이블 제목을 작성함'
  }
};

export const ScopeTbl = {
  args: {
    setPage : 'ScopeTbl',
    captionState : true,
    caption: '기존 caption을 그대로 보여줘',
  }
};






