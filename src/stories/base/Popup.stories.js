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
    setPage : 'Top',
  }
};

export const ModalCenter = {
  args: {
    setPage : 'Center',
  }
};

export const ModalLeft = {
  args: {
    setPage : 'Left',
  }
};

export const ModalBottom = {
  args: {
    setPage : 'Bottom',
  }
};

export const ModalToast = {
  args: {
    setPage : 'Toast',
  }
};






