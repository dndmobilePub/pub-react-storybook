import { ALink } from './ALink';

// title : 컴포넌트 카테고리 설정 및 이름 작성 '/'를 넣어 카테고리화 
// component : import한 컴포넌트 이름 작성
// layout : 컴포넌트 화면 위치
// tags : autodcs 자동으로 docs 문서 생성
// argTypes : 컴포넌트에 필요한 전달인자의 종류와 타입을 설정

export default {
  title: 'ver_0.0/ALink',
  component: ALink,
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

export const TxtDefault = {
  args: {
    setPage : 'txtDefault',
    disabled: false,
    label: '기본링크',
  },
};

export const TxtLine = {
  args: {
    setPage : 'txtLine',
    disabled: false,
    label: '라인링크',
  },
};

export const TxtArrow = {
  args: {
    setPage : 'txtArrow',
    disabled: false,
    label: '링크+화살표',
  },
};
