import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../lib/**/*.mdx",
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  staticDirs: ["../public"],
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="/storybook-favicon.svg" />
    <style>
      .sidebar-header {
        padding-block: 0.5rem !important;
      }

      .sidebar-header > * {
        overflow: visible !important;
      }

      .sidebar-header img {
        height: 2rem !important;
        width: auto !important;
        max-height: none !important;
        max-width: none !important;
        transform: scale(1.2) !important;
        transform-origin: left center !important;
      }

      .sidebar-header span {
        font-size: 1rem !important;
        font-weight: 700 !important;
      }

      #storybook-explorer-menu [data-item-id][data-selected="false"] svg {
        color: var(--primary, hsl(142.4 71.8% 29.2%)) !important;
      }

      #storybook-explorer-menu [data-item-id]:is(:hover, :focus-within) {
        background-color: var(--accent, hsl(138 13% 81%)) !important;
        color: var(--accent-foreground, var(--primary, hsl(142.4 71.8% 29.2%))) !important;
      }

      #storybook-explorer-menu [data-item-id]:is(:hover, :focus-within) svg {
        color: var(--accent-foreground, var(--primary, hsl(142.4 71.8% 29.2%))) !important;
      }
    </style>
  `
};
export default config;