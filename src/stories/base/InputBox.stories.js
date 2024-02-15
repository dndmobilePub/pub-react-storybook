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
    disabled: false,
    label: 'Base',
    placeholder: 'default',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};

export const ResidentNum = {
  args: {
    setPage : 'ResidentNum',
    type: 'number',
    disabled: false,
    label: '주민등록번호',
    placeholder: '생년월일 6자리',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};

export const LabelResidentNum = {
  args: {
    setPage : 'LabelResidentNum',
    type: 'number',
    disabled: false,
    label: '주민등록번호',
    placeholder: '생년월일 6자리',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};

export const PhoneNum = {
  args: {
    setPage : 'phoneNum',
    type: 'number',
    disabled: false,
    label: '휴대폰번호 입력',
    placeholder: '',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};

export const Label = {
  args: {
    setPage : 'Label',
    type: 'text',
    disabled: false,
    label: 'text default',
    placeholder: '',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};

export const LabelPhone = {
  args: {
    setPage : 'LabelPhone',
    type: 'text',
    disabled: false,
    label: '휴대폰번호 입력',
    placeholder: '',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};

export const LabelPhoneAuto = {
  args: {
    setPage : 'LabelPhoneAuto',
    type: 'text',
    disabled: false,
    label: '휴대폰번호 입력',
    placeholder: '',
    fieldState : '',
    infoState: true,
    infoMsg:'안내성 메세지',
    validMsg:'오류체크 메세지 출력',
    inputType:'',
  },
};