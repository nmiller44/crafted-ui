This is the Crafted UI React component library - a collection of accessible, themeable React components styled with Tailwind CSS.

## Technology Stack

- **React 19** - Component library framework
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS v4** - Utility-first styling
- **Base UI Components** - Headless accessible primitives from MUI
- **Vite** - Build tool and bundler
- **Storybook** - Component development and documentation

## Project Structure

```
lib/
├── {component-name}/
│   ├── Component.tsx           # Main component implementation
│   ├── component.stories.tsx   # Storybook stories
│   └── index.ts                # Component exports
├── main.ts                     # Library entry point (exports all components)
├── utils.ts                    # Shared utilities (classNames helper)
├── vars.css                    # CSS custom properties for theming
└── tailwind.css                # Tailwind imports
```

## Component Development Guidelines

### Component Props Pattern

Use `type` instead of `interface` for component props. Extend base component props using intersection types (`&`):

```tsx
// For Base UI primitives
export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
    title?: string;
    subtitle?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
};

// For native HTML elements
export type ButtonProps = React.ComponentProps<"button"> & {
    clr?: 'primary' | 'secondary' | 'destructive';
    outline?: boolean;
};

// For components wrapping other library components
export type CheckboxGroupProps = React.ComponentProps<typeof CheckboxGroupPrimitive> & {
    horizontal?: boolean;
};
```

This pattern provides better composability and maintains consistency across the component library.

### Styling with Tailwind

- Use the `classNames` utility from `~/utils` for combining class strings
- The `classNames` function merges and deduplicates Tailwind classes using `clsx` and `tailwind-merge`
- Always allow consumers to override styles via `className` prop
- Apply `className` last in the `classNames()` call to ensure user overrides work

Example:
```tsx
import { classNames } from "~/utils";

export const Component = ({ className, ...props }: ComponentProps) => {
    return (
        <div className={classNames(
            "base-classes",
            "conditional-classes",
            className  // Always last for proper override behavior
        )} {...props}>
            {children}
        </div>
    );
};
```

### CSS Custom Properties

Use CSS custom properties defined in `vars.css` for theming:

**Color Tokens:**
- `background` / `foreground` - Base text and background
- `primary` / `primary-foreground` - Primary brand color
- `secondary` / `secondary-foreground` - Secondary brand color
- `accent` / `accent-foreground` - Accent color
- `destructive` / `destructive-foreground` - Error/danger states
- `muted` / `muted-foreground` - Subtle/muted content
- `border` - Border colors
- `ring` - Focus ring colors
- `card` / `card-foreground` - Card backgrounds
- `popover` / `popover-foreground` - Popover backgrounds

**Status Colors:**
- `danger`, `warning`, `success`, `info`

**Chart Colors:**
- `chart-1` through `chart-5`

**Layout Tokens:**
- `--container-container: 80rem` - Max content width
- `--container-navbar: 4rem` - Navbar height
- `--container-sidebar: 12rem` - Sidebar width
- `--radius: 0.5rem` - Default border radius

### Component Structure

1. **Import statements** - External dependencies, then internal
2. **Type definitions** - Props interface using the standard pattern
3. **Constants** - Size mappers, variant objects, etc.
4. **Component implementation** - Functional component with destructured props
5. **Sub-components** - Helper components (like icons) defined after main component
6. **Default exports** - If needed

Example:
```tsx
import { Component as ComponentPrimitive } from "@base-ui-components/react";
import { classNames } from "~/utils";

export type ComponentProps = React.ComponentProps<typeof ComponentPrimitive> & {
    size?: "sm" | "md" | "lg";
};

const sizeMapper = {
    sm: "size-3",
    md: "size-4",
    lg: "size-5",
};

export const Component = ({ 
    size = "md",
    className,
    children,
    ...props 
}: ComponentProps) => {
    return (
        <ComponentPrimitive
            className={classNames(
                "base-classes",
                sizeMapper[size],
                className
            )}
            {...props}
        >
            {children}
        </ComponentPrimitive>
    );
};
```

### Accessibility

- Use Base UI Components for accessible primitives when available
- Ensure keyboard navigation works properly
- Include proper ARIA attributes
- Maintain focus management
- Support dark mode through CSS custom properties
- Test with screen readers

### Component Exports

All components must be exported from their directory's `index.ts` and added to the main `lib/main.ts`:

```tsx
// lib/component-name/index.ts
export * from "./Component";
export * from "./ComponentSubpart";

// lib/main.ts
export * from "~/component-name";
```

### Storybook Stories

- Create stories in `{component}.stories.tsx` files
- Use craft beer themed examples for consistency
- Show different variants, sizes, and states
- Include accessibility-focused examples
- Stories should demonstrate real-world usage patterns

Example story structure:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

const meta = {
  title: 'CraftedUI/Category/Component',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Component {...args}>Content</Component>
  )
};
```

### Boolean Props Pattern

For boolean props that control styling:
- Default to `false`
- Use descriptive names (`horizontal`, `outline`, `full`, `rounded`)
- Apply conditional classes based on the boolean

```tsx
export type ComponentProps = React.ComponentProps<"div"> & {
    horizontal?: boolean;
};

export const Component = ({ horizontal = false, className, ...props }: ComponentProps) => {
    return (
        <div className={classNames(
            "flex space-y-3",
            horizontal ? "flex-row" : "flex-col",
            className
        )} {...props} />
    );
};
```

### Path Aliases

Use the `~` alias to import from the lib directory:

```tsx
import { classNames } from "~/utils";
import { Button } from "~/button";
```

## Development Workflow

1. **Component Development:**
   ```bash
   npm run storybook  # Start Storybook for component development
   ```

2. **Building:**
   ```bash
   npm run build  # Build library and CSS
   ```

3. **Linting:**
   ```bash
   npm run lint  # Run ESLint
   ```

## Key Principles

1. **Composability** - Components should be composable and work well together
2. **Accessibility** - Always prioritize accessible patterns
3. **Themability** - Use CSS custom properties for theming
4. **TypeScript** - Full type safety throughout
5. **Consistency** - Follow established patterns for props, styling, and structure
6. **Developer Experience** - Clear prop names, good defaults, predictable behavior
