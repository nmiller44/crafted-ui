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

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex space-x-4 items-center">
      <Avatar {...args} fallback="NH" size="lg" src="https://github.com/nmiller44.png" />
      <Avatar {...args} fallback="BM" size="lg" />
      <Avatar {...args} fallback="SK" size="lg" className="bg-secondary text-secondary-foreground" />
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <Heading4 title="With Images" />   
          <div className="flex space-x-8 items-center">
            <Avatar {...args} fallback="SM" size="sm" src="https://github.com/nmiller44.png" />    
            <Avatar {...args} fallback="MD" size="md" src="https://github.com/nmiller44.png" />
            <Avatar {...args} fallback="LG" size="lg" src="https://github.com/nmiller44.png" />
            <Avatar {...args} fallback="XL" size="xl" src="https://github.com/nmiller44.png" />
          </div>       
        </div>

        <div className="flex flex-col space-y-2">
          <Heading4 title="Fallback Only" />   
          <div className="flex space-x-8 items-center">
            <Avatar {...args} fallback="NH" size="sm" />    
            <Avatar {...args} fallback="BM" size="md" />
            <Avatar {...args} fallback="SK" size="lg" />
            <Avatar {...args} fallback="JD" size="xl" />
          </div>       
        </div>
    </div>
  )
};

export const CustomColors: Story = {
  args: {},
  render: (args) => (
    <div className="flex space-x-8 items-center">
      <Avatar {...args} fallback="NH" className="bg-destructive text-destructive-foreground" />   
      <Avatar {...args} fallback="BM" className="bg-secondary text-secondary-foreground" />
      <Avatar {...args} fallback="SK" className="bg-accent text-accent-foreground" />
      <Avatar {...args} fallback="JD" className="bg-muted text-muted-foreground" />
    </div>
  )
};
