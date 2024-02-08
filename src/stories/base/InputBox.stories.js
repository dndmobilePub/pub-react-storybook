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
    infoMsg: true,
    InfoMessage:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:''
    
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

export const Label = {
  args: {
    setPage : 'Label',
    type: 'text',
    label: 'text default',
    placeholder: '',
    fieldState : '',
  },
};

export const LabelPhone = {
  args: {
    setPage : 'LabelPhone',
    label: '휴대폰번호 입력',
  },
};

export const LabelPhoneAuto = {
  args: {
    setPage : 'LabelPhoneAuto',
    label: '휴대폰번호 입력',
  },
};