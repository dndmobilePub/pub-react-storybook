import { Raido } from './Rdochk';

export default {
  // 카테고리 title
  title: 'ver_0.0/Radio',
  component: Raido,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} ;

export const Base = {
  args: {
    setPage : 'Base',
    checked: false,
    readonly: false,
    disabled: false,
  },
};

export const Circle = {
  args: {
    setPage : 'Circle',
  },
};

export const BoxType1 = {
  args: {
    setPage : 'box type1',
  },
};

export const BoxType2 = {
  args: {
    setPage : 'box type2',
  },
};

export const BoxType3 = {
  args: {
    setPage : 'box type3',
  },
};
