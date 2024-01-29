import { InputBox } from './InputBox';

export default {
  // 카테고리 title
  title: 'ver_0.0/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} ;

export const Base = {
  args: {
    setPage : 'Base',
    type: 'text',
    label: 'text default',
    placeholder: 'default',
  },
};

export const Exception = {
  args: {
    setPage : 'exception',
    type: 'text',
    placeholder: 'clear btn 없음',
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
    errMsg : true,
  },
};

export const ValidState = {
  args: {
    setPage : 'validState',
    type: 'text',
    placeholder: 'placeholder',
    errMsg : true,
    fieldState : 'valid',
  },
};

export const ResidentNum = {
  args: {
    setPage : 'residentNum',
    type: 'number',
    label: '주민등록번호',
    placeholder: '생년월일 6자리',
    disabled: false,
    errMsg : false,
    fieldState : '',
  },
};

export const PhoneNum = {
  args: {
    setPage : 'phoneNum',
    label: '휴대폰번호 입력',
    placeholder: '1234',
  },
};