import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { Heading4 } from '../heading/Heading4';

const meta = {
  title: 'CraftedUI/Components/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-2">
          <Heading4 title="Sizes" />   
          <div className="flex space-x-8 items-center">
            <Avatar {...args} fallback="SM" size="sm" src="https://github.com/nmiller44.png" />    
            <Avatar {...args} fallback="MD" size="md" src="https://github.com/nmiller44.png" />
            <Avatar {...args} fallback="LG" size="lg" src="https://github.com/nmiller44.png" />
            <Avatar {...args} fallback="XL" size="xl" src="https://github.com/nmiller44.png" />
          </div>       
        </div>

        <div className="flex flex-col space-y-2">
          <Heading4 title="Custom Styling" />   
          <div className="flex space-x-8 items-center">
            <Avatar {...args} fallback="XX" src="https://github.com/nmiller44.png"
                              className="bg-destructive text-destructive-foreground" />   
            <Avatar {...args} fallback="YY" src="https://github.com/nmiller44.png"
                              className="bg-secondary text-secondary-foreground" />   
          </div>       
        </div>

    </div>
  )
};
