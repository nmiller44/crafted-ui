# Crafted UI

Crafted UI is a modern React component library that combines the flexibility of Tailwind CSS with accessible, production-ready components. Built with TypeScript and Vite, it provides a collection of customizable UI components designed for building beautiful web applications quickly and efficiently.

**Key Features:**
- 🎨 **Tailwind CSS v4** - Utility-first styling with full theme customization
- ♿ **Accessible** - Built on Base UI components with ARIA compliance
- 🎯 **TypeScript** - Full type safety and excellent developer experience
- 🎭 **Themeable** - CSS custom properties for easy theme customization
- 🚀 **Modern Stack** - React 19, Vite, and the latest web standards

## Documentation

- 📚 **[Documentation](https://crafted-ui.com)** - Complete component documentation, guides, and examples
- 🎨 **[Storybook](https://storybook.crafted-ui.com)** - Interactive component explorer and live examples

## Installation

Install Crafted UI using npm or your preferred package manager:

```bash
npm install crafted-ui
```

## Usage

Crafted UI requires Tailwind CSS v4. Import the styles in your application's main CSS file, processed by Tailwind:

```css
@import "tailwindcss";
@import "crafted-ui/styles";
```

The styles import supplies Crafted's theme tokens, dark variant, and base/component rules, and automatically registers the packaged component JavaScript for Tailwind source detection.

Then import and use the components in your React application:

```tsx
import { Button, Card, Modal } from 'crafted-ui';

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

**Note:** Make sure to import the Crafted UI styles in your application's main CSS file.

