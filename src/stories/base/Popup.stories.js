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

export const PopupModal = {
  args: {
    setPage : 'POPUP',
  }
};




