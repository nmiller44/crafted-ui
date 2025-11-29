import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta = {
  title: 'CraftedUI/Components/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <Alert {...args} title="Low Inventory Warning" status="warning">
            Cascade hops inventory below minimum threshold. Reorder recommended.
        </Alert>
        <Alert {...args} title="Fermentation Failure" status="danger">
            <ul>
                <li>Temperature spike detected in Tank 3</li>
                <li>Check temperature control system immediately</li>
            </ul>
        </Alert>
        <Alert {...args} title="Batch Complete" status="success">
            <div className="text-sm">IPA Batch #247 has completed fermentation and is ready for kegging.</div>
        </Alert>
        <Alert {...args} title="Seasonal Release Scheduled" status="info">
            <div className="text-sm">Pumpkin Ale release scheduled for October 1st. Update taproom menu.</div>
        </Alert>
    </div>
  )
};

