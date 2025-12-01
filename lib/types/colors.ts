/**
 * Color variants used across Crafted UI components.
 * 
 * These color variants provide a consistent theming system that maps to CSS custom properties.
 * 
 * @see https://crafted-ui.com/docs/color-system
 */
export type Clr = 
    // Semantic colors (recommended)
    | 'blank' 
    | 'dark' 
    | 'primary' 
    | 'muted' 
    | 'secondary' 
    | 'accent' 
    | 'destructive'
    // Status colors
    | 'danger' 
    | 'warning' 
    | 'success' 
    | 'info'
    // Neutral base colors
    | 'slate' 
    | 'gray' 
    | 'zinc' 
    | 'neutral' 
    | 'stone'
    // Warm base colors
    | 'red' 
    | 'orange' 
    | 'amber' 
    | 'yellow'
    // Cool base colors
    | 'lime' 
    | 'green' 
    | 'emerald' 
    | 'teal' 
    | 'cyan'
    | 'sky' 
    | 'blue' 
    | 'indigo'
    // Vibrant base colors
    | 'violet' 
    | 'purple' 
    | 'fuchsia' 
    | 'pink' 
    | 'rose';
