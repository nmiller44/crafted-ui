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
- **Prefer `size-x` over `h-x w-x` for square sizing** - When width and height are equal, use the `size` utility for more concise code

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

**Sizing examples:**
```tsx
// ✅ Correct - use size for square dimensions
<Icon className="size-4" />
<Avatar className="size-10" />

// ❌ Avoid - don't use separate h/w for equal dimensions
<Icon className="h-4 w-4" />
<Avatar className="h-10 w-10" />

// ✅ Correct - use separate h/w only when dimensions differ
<div className="h-20 w-full" />
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
- Follow the story organization pattern below
- Stories should demonstrate real-world usage patterns
- **NEVER explicitly set props to their default values** in stories or examples

#### Default Prop Values

When creating stories and examples:
- **DO NOT** specify props when using their default values
- This pattern demonstrates what happens when props are omitted
- Only specify props when using non-default values

Common default values:
- Input `type` defaults to `"text"`
- Button `type` defaults to `"button"`
- FieldInset `position` defaults to `"right"`
- Boolean props typically default to `false`

Examples:
- ❌ `<Input type="text" placeholder="Name" />` (redundant - text is default)
- ✅ `<Input placeholder="Name" />` (correct - shows default behavior)
- ✅ `<Input type="email" placeholder="Email" />` (correct - not default)
- ❌ `<Button type="button">Click</Button>` (redundant - button is default)
- ✅ `<Button>Click</Button>` (correct - shows default behavior)
- ✅ `<Button type="submit">Submit</Button>` (correct - not default)
- ❌ `<FieldInset text="USD" position="right" />` (redundant - right is default)
- ✅ `<FieldInset text="USD" />` (correct - shows default behavior)
- ✅ `<FieldInset text="USD" position="left" />` (correct - not default)

#### Story Organization Pattern

Stories should be organized to demonstrate both functionality and real-world usage:

1. **Feature Story** - Shows the component in a complete, real-world example
   - Named `Feature`
   - Demonstrates the component as it would be used in an actual application
   - Combines multiple features in a cohesive example
   - Example: A complete form with multiple fields, labels, errors, and insets

2. **Basic Story** - Shows common functionality and variants
   - Named `Basic`
   - Demonstrates the primary features of the main component
   - Can include multiple examples to show different variations
   - Keep focused on the core component functionality
   - Example: Field with/without label, with error, unlabeled

3. **Subcomponent Stories** - One story per significant subcomponent or feature
   - Named descriptively (e.g., `WithInset`, `WithIcon`, `Horizontal`)
   - Demonstrates variations of a specific subcomponent or feature
   - Can show multiple examples of that specific feature
   - Example: FieldInset with text (left/right), custom icon content

**Guidelines:**
- Keep the total number of stories minimal (typically 2-4 per component)
- Combine related variations within a single story
- Use `space-y-4` or similar spacing to show multiple examples within one story
- Each story should have a clear, focused purpose

Example story structure:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';
import { SubComponent } from './SubComponent';

const meta = {
  title: 'CraftedUI/Category/Component',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg">
      {/* Complete real-world example */}
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4 max-w-sm">
      {/* Multiple examples showing core functionality */}
    </div>
  )
};

export const WithSubcomponent: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4 max-w-sm">
      {/* Multiple examples of the subcomponent variations */}
    </div>
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

## Code Change Protocol

**IMPORTANT:** When addressing complex issues or making architectural changes:

1. **Analyze First** - Thoroughly investigate the problem and gather all relevant information
2. **Propose Solutions** - Present multiple approaches with pros/cons before implementing
3. **Wait for Approval** - Do NOT modify code until the plan has been explicitly approved
4. **Document Intent** - Explain what the changes will accomplish and potential impacts
5. **Incremental Changes** - Break large changes into reviewable steps

This ensures we make informed decisions and avoid premature or incorrect implementations.

## Documentation Meta Patterns for AI and Automation

### JSDoc Generation for New Components

When a new component is added:
- Always generate JSDoc comments for the component and its props.
- For the @since value, use the current package.json version (e.g., 0.2.1) as an approximation.
- Human reviewers may update the @since value if needed, but this ensures a reasonable default.

This ensures new components are documented and versioned consistently.

### JSDoc @see Link Verification

When generating JSDoc comments for components or subcomponents:
- Always verify that documentation pages and Storybook entries exist before adding @see links.
- If a component or subcomponent does not have its own docs or story, omit those links or reference the parent component’s documentation if appropriate.
- Never add dead links to JSDoc comments.

This ensures all @see links in JSDoc are valid and useful.
