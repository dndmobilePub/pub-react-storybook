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
    errMsg : false,
  },
};

export const ResidentNum = {
  args: {
    setPage : 'ResidentNum',
    errMsg : false,
  },
};

export const UiSelect = {
  args: {
    setPage : 'UI select',
  },
};



