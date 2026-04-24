import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const primary = 'hsl(142.4 71.8% 29.2%)';
const secondary = 'hsl(208 21% 63%)';

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: primary,
    colorSecondary: primary,
    textMutedColor: primary,
    barHoverColor: primary,
    barSelectedColor: primary,
    brandTitle: 'Crafted UI',
    brandUrl: '/',
    brandTarget: '_self',
    brandImage: '/storybook-brand-wordmark.svg?v=20260306',
  }),
});
