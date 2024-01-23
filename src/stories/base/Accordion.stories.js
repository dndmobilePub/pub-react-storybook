import { Accordion } from './Accordion';

export default {
  // 카테고리 title
  title: 'ver_0.0/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} ;


export const Base = {
  args: {
    setPage : 'Base',
    onChkBox : false,
  }
};

export const ScrollTop = {
  args: {
    setPage : 'ScrollTop',
    onChkBox : false,
  }
};

export const OneOpen = {
  args: {
    setPage : 'OneOpen',
    onChkBox : false,
  }
};

export const BtnChangeColor = {
  args: {
    setPage : 'BtnChangeColor',
    onChkBox : false,
  }
};

export const CheckboxToggle = {
  args: {
    setPage : 'CheckBoxToggle',
    onChkBox : true,
  }
};

export const CheckboxAllToggle = {
  args: {
    setPage : 'CheckBoxAllToggle',
    onChkBox : true,
  }
};

export const ToggleInToggle = {
  args: {
    setPage : 'ToggleInToggle',
    onChkBox : false,
  }
};




