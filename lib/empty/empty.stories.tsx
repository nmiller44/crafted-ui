import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Empty } from './Empty';

const meta = {
  title: 'CraftedUI/Components/Empty',
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof Empty>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <Empty {...args} title="Empty Tap Line" subtitle="Click here to tap a new beer." />
    </div>
  )
};
