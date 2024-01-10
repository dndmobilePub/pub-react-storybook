import { Button } from './Button';

export default {
  // 카테고리 title
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

export const Primary = {
  args: {
    setPage : '',
    primary: false,
    label: '기본BTN',
  },
};

export const Txt = {
  args: {
    setPage : 'txt',
    primary: true,
    label: '기본BTN',
  },
};

export const Disable = {
  args: {
    setPage : '',
    primary: false,
    label: '기본BTN',
  },
};

export const grow = {
  args: {
    setPage : 'grow',
    primary: true,
    label: '기본BTN',
  },
};

export const growFull = {
  args: {
    setPage : 'grow full',
    primary: true,
    label: '기본BTN',
  },
};

export const full = {
  args: {
    setPage : 'full',
    primary: true,
    label: '기본BTN',
  },
};

export const full_el = {
  args: {
    setPage : 'full el',
    primary: true,
    label: '기본BTN',
  },
};
