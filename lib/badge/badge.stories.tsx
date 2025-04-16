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
            <Badge title="Primary" color="primary" />
            <Badge title="Primary" color="primary" outline />
            <Badge title="Muted" color="muted" />
            <Badge title="Muted" color="muted" outline />
            <Badge title="Secondary" color="secondary" />
            <Badge title="Secondary" color="secondary" outline />
            <Badge title="Accent" color="accent" />
            <Badge title="Accent" color="accent" outline />
            <Badge title="Destructive" color="destructive" />
            <Badge title="Destructive" color="destructive" outline />
        </div>
        <div className="max-w-sm flex flex-wrap gap-3">
            <Badge title="Green" color="green" />
            <Badge title="Green Outline" color="green" outline />
            <Badge title="Red" color="red" />
            <Badge title="Red Outline" color="red" outline />
            <Badge title="Yellow" color="yellow" />
            <Badge title="Yellow Outline" color="yellow" outline />
            <Badge title="Blue" color="blue" />
            <Badge title="Blue Outline" color="blue" outline />
            <Badge title="Purple" color="purple" />
            <Badge title="Purple Outline" color="purple" outline />
        </div>
    </div>
  )
};
