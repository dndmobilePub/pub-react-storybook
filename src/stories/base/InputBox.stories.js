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

export const Base = {
  args: {
    setPage : 'Base',
    type: 'text',
    label: 'Base',
    placeholder: 'default',
    fieldState : '',
  },
};

export const Exception = {
  args: {
    setPage : 'exception',
    label: 'clear btn 없음',
    type: 'text',
    placeholder: 'clear btn 없음',
  },
};

export const Disable = {
  args: {
    setPage : 'disable',
    label: 'disabled',
    type: 'text',
    placeholder: 'disabled',
    disabled: true,
  },
};

export const InfoMsg = {
  args: {
    setPage : 'infoMsg',
    label: 'text default',
    type: 'text',
    placeholder: 'placeholder',
    disabled: false,
    errMsg : true,
    InfoMessage:'안내성 메세지'
  },
};

export const ValidState = {
  args: {
    setPage : 'validState',
    label: 'text default',
    type: 'text',
    placeholder: 'placeholder',
    errMsg : true,
    fieldState : 'valid',
    InfoMessage:'입력값의 유효성이 정상입니다.'
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
  },
};

export const Placehoder = {
  args: {
    setPage : 'Placehoder',
    type: 'text',
    label: 'text default',
    placeholder: '',
    fieldState : '',
  },
};

export const PlacehoderPhone = {
  args: {
    setPage : 'PlacehoderPhone',
    label: '휴대폰번호 입력',
  },
};