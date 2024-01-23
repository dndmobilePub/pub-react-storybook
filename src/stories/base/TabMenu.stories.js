import { TabMenu } from './TabMenu';

export default {
  // 카테고리 title
  title: 'ver_0.0/TabMenu',
  component: TabMenu,
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
  }
};

export const TabAction = {
  args: {
    setPage : 'TabAction',
  }
};



