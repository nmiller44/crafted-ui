import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Empty } from './Empty';

const meta = {
  title: 'CraftedUI/Components/Empty',
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof Empty>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <Empty {...args} title="No data available" subtitle="Please check back later." />
    </div>
  )
};
