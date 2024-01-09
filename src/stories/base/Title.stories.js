import { Title } from './Title';

export default {
  // 카테고리 title
  title: 'ver_0.0/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} ;

export const Basics = {
  args: {
    setPage : 'Basics',
  },
};

export const Exception = {
  args: {
    setPage : 'Exception',
  },
};

export const Application = {
  args: {
    setPage : 'Application',
  },
};

export const Text = {
  args: {
    setPage : 'Text',
  },
};

export const TextEle = {
  args: {
    setPage : 'Text: ellipsis',
  },
};

export const List = {
  args: {
    setPage : 'List',
  },
};

