import { InputBox } from './InputBox';

export default {
  // 카테고리 title
  title: 'ver_0.0/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} ;

export const Primary = {
  args: {
    setPage : '',
    type: 'text',
    label: 'text default',
    placeholder: 'default',
    disabled: false,
  },
};

export const exception = {
  args: {
    setPage : '',
    type: 'text',
    placeholder: 'clear btn 없음',
    disabled: false,
  },
};

export const Disable = {
  args: {
    setPage : 'disable',
    type: 'text',
    placeholder: 'disabled',
    disabled: true,
  },
};

export const InfoMsg = {
  args: {
    setPage : 'infoMsg',
    type: 'text',
    placeholder: 'placeholder',
    disabled: false,
    invalid : false,
  },
};

export const ValidState = {
  args: {
    setPage : 'validState',
    type: 'text',
    placeholder: 'placeholder',
    disabled: false,
    invalid : false,
    fieldState : false,
  },
};


export const Password = {
  args: {
    setPage : 'password',
    type: 'password',
  },
};