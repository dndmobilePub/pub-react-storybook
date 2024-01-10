/** @type { import('@storybook/react').Preview } */
import '../src/styles/index.scss'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#F3F5FB',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'blue',
          value: '#2E48A0',
        },
      ],
    }
  },
};

export default preview;
