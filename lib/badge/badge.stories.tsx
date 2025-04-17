import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'CraftedUI/Components/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="max-w-sm flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge title="Outline" outline />
            <Badge title="Blank" />
            <Badge title="Blank" outline />
            <Badge title="Primary" clr="primary" />
            <Badge title="Primary" clr="primary" outline />
            <Badge title="Muted" clr="muted" />
            <Badge title="Muted" clr="muted" outline />
            <Badge title="Secondary" clr="secondary" />
            <Badge title="Secondary" clr="secondary" outline />
            <Badge title="Accent" clr="accent" />
            <Badge title="Accent" clr="accent" outline />
            <Badge title="Destructive" clr="destructive" />
            <Badge title="Destructive" clr="destructive" outline />
        </div>
        <div className="max-w-sm flex flex-wrap gap-3">
            <Badge title="Green" clr="green" />
            <Badge title="Green Outline" clr="green" outline />
            <Badge title="Red" clr="red" />
            <Badge title="Red Outline" clr="red" outline />
            <Badge title="Yellow" clr="yellow" />
            <Badge title="Yellow Outline" clr="yellow" outline />
            <Badge title="Blue" clr="blue" />
            <Badge title="Blue Outline" clr="blue" outline />
            <Badge title="Purple" clr="purple" />
            <Badge title="Purple Outline" clr="purple" outline />
        </div>
    </div>
  )
};
