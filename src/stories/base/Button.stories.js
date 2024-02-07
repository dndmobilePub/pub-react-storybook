import { Button } from './Button';

// title : 컴포넌트 카테고리 설정 및 이름 작성 '/'를 넣어 카테고리화 
// component : import한 컴포넌트 이름 작성
// layout : 컴포넌트 화면 위치
// tags : autodcs 자동으로 docs 문서 생성
// argTypes : 컴포넌트에 필요한 전달인자의 종류와 타입을 설정

export default {
  title: 'ver_0.0/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} ;
// export const  컴포넌트 이름 <-- 설정한 카테고리 안에 들어갈 이름
//               MenuTab 으로 작성시 스토리북에서 띄어쓰기 -> Menu Tab
// args : 스토리의 전달인자를 작성 및 기본값 설정

export const primary = {
  args: {
    setPage : '1st',
    disabled: false,
    label: '기본BTN',
  },
};
export const secondary = {
  args: {
    setPage : '2nd',
    disabled: false,
    label: '기본BTN',
  },
};
export const thirdly = {
  args: {
    setPage : '3rtjd',
    disabled: false,
    label: '기본BTN',
  },
};

export const Modal = {
  args: {
    setPage : 'modal',
    disabled: false,
    label: '모달팝BTN',
    dataValue:'', // 띄울 방향
    dataModal:'', // 보여줄 페이지 컨텐츠
  },
};

export const Disable = {
  args: {
    setPage : 'disable',
    disabled: true,
    label: '기본BTN - DISABLED',
  },
};

