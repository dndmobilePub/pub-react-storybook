import { TySwiper } from './Swiper';

export default {
  // 카테고리 title
  title: 'ver_0.0/Swiper',
  component: TySwiper,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} ;


export const Base = {
  args: {
    setPage : 'Base',
    type : 'default',
  }
};

export const Tab = {
  args: {
    setPage : 'Tab',
    type : 'default'
  }
};
export const ScrollTab = {
  args: {
    setPage : 'ScrollTab',
    type : 'default'
  }
};





