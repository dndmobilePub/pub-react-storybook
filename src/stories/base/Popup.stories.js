import { Popup } from './Popup';

export default {
  // 카테고리 title
  title: 'ver_0.0/Popup',
  component: Popup,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} ;

export const ModalTop = {
  args: {
    setPage : 'TOP',
  }
};

export const ModalCenter = {
  args: {
    setPage : 'CENTER',
  }
};

export const ModalLeft = {
  args: {
    setPage : 'LEFT',
  }
};

export const ModalBottom = {
  args: {
    setPage : 'BOTTOM',
  }
};

export const ModalToast = {
  args: {
    setPage : 'TOAST',
  }
};






