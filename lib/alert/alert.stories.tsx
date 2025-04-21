import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta = {
  title: 'CraftedUI/Components/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <Alert {...args} title="No data available">
            Please check back later.
        </Alert>
        <Alert {...args} title="Errors were returned!" status="error">
            <ul>
                <li>Error #1</li>
                <li>Stack trace</li>
            </ul>
        </Alert>
        <Alert {...args} title="No data available" status="success">
            <div className="text-sm">Please check back later.</div>
        </Alert>
        <Alert {...args} title="No data available" status="info">
            <div className="text-sm">Please check back later.</div>
        </Alert>
    </div>
  )
};
