import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Heading1 } from './Heading1';
import { Heading2 } from './Heading2';
import { Heading3 } from './Heading3';
import { Heading4 } from './Heading4';
import { Heading5 } from './Heading5';

const meta = {
  title: 'CraftedUI/Components/Heading',
  component: Heading1,
} satisfies Meta<typeof Heading1>;

export default meta;
type Story = StoryObj<typeof Heading1>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="bg-muted-foreground p-5">
      <div className="bg-background rounded-sm p-8 grow">
        <div className="flex flex-col space-y-12">
            <Heading1 {...args} title="Heading One" subtitle="is the loneliest number" />
            <Heading2 {...args} title="Heading Two" subtitle="Buckle my shoe" />
            <Heading3 {...args} title="Heading Three" subtitle="Please check back later" />
            <Heading4 {...args} title="Heading Four" subtitle="on the floor" />
            <Heading5 {...args} title="Heading Five" subtitle="All the way live" />
        </div>
      </div>
    </div>

  )
};
