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

export const Base = {
  args: {
    setPage : 'Base',
    disabled: false,
  },
};

export const Email = {
  args: {
    setPage : 'Email',
    type: 'text',
    disabled: false,
    label: '이메일',
    placeholder: '이메일',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};

export const UiSelect = {
  args: {
    setPage : 'UI select',
    type: 'text',
    disabled: false,
    label: '휴대폰번호 입력',
    placeholder: '휴대폰번호 입력',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};



