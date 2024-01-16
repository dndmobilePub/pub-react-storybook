import { Checkbox } from './CheckBox';

export default {
  // 카테고리 title
  title: 'ver_0.0/Checkbox',
  component: Checkbox,
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

export const CircleLine = {
  args: {
    setPage : 'cline',
  },
};

export const Square = {
  args: {
    setPage : 'square',
  },
};
export const SquareLine = {
  args: {
    setPage : 's-line',
  },
};

export const Switch = {
  args: {
    setPage : 'switch',
  },
};

export const Box = {
  args: {
    setPage : 'box',
  },
};
