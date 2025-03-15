import type { Preview } from "@storybook/react";
import { Renderer } from "storybook/internal/types";
import { withThemeByClassName } from '@storybook/addon-themes';

import '../lib/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
     withThemeByClassName<Renderer>({
       themes: {
         light: '',
         dark: 'dark',
       },
       defaultTheme: 'light',
     }),
    ]
};

export default preview;
