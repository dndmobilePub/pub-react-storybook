import { ToolTip } from './Tooltip';

export default {
  // 카테고리 title
  title: 'ver_0.0/ToolTip',
  component: ToolTip,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} ;


export const Tooltip = {
  args: {
    setPage : 'Base',
    type : 'default'
  }
};





