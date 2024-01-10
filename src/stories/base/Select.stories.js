import { Select } from './Select';

export default {
  // 카테고리 title
  title: 'ver_0.0/Select',
  component: Select,
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
    invalid : false,
    label: '기본BTN',
  },
};

