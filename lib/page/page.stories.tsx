import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { Button } from '../button/Button';

const meta = {
  title: 'CraftedUI/Components/Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <PageHeader title="Page Title" subtitle="Page Subtitle" />
        <Page {...args}>
        </Page>
    </div>
  )
};

export const Buttons: Story = {
    args: {},
    render: (args) => (
      <div className="flex flex-col space-y-12 grow">
          <PageHeader title="Page Title" subtitle="Page Subtitle">
            <Button>New</Button>
          </PageHeader>
          <Page {...args}>
          </Page>
      </div>
    )
  };
