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
    // backgroundColor: { control: 'color' },
  },
} ;

export const Email = {
  args: {
    setPage : 'Email',
    invalid : false,
  },
};

export const ResidentNum = {
  args: {
    setPage : 'ResidentNum',
    invalid : false,
  },
};


