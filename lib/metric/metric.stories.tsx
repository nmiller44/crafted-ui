import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Metric } from './Metric';
import { Card } from '../card/Card';

const meta = {
  title: 'CraftedUI/Components/Metric',
  component: Metric,
} satisfies Meta<typeof Metric>;

export default meta;
type Story = StoryObj<typeof Metric>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex space-x-8">
        <Card body className="min-w-64">
            <Metric {...args} title="Batch Cost" value="$1,979" />
        </Card>
        <div className="min-w-64">
         <Card body>
            <Metric {...args} title="Batch Cost" value="$1,979" />
        </Card>           
        </div>
    </div>

  )
};
