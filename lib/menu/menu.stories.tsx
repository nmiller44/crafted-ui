import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { MenuContent } from './MenuContent';
import { MenuItem } from './MenuItem';
import { MenuTrigger } from './MenuTrigger';

import { Avatar } from '../avatar/Avatar';

const meta = {
  title: 'CraftedUI/Components/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex space-x-8">
        <Menu {...args}>
            <MenuTrigger>
                <Avatar fallback="MU"></Avatar>
            </MenuTrigger>
            <MenuContent>
                <MenuItem><a href="#">Link 1</a></MenuItem>
                <MenuItem>Take 2</MenuItem>
                <MenuItem>Take 3</MenuItem>
            </MenuContent>
        </Menu>

        <Menu {...args}>
            <MenuTrigger>
                <Avatar fallback="MU"></Avatar>
            </MenuTrigger>
            <MenuContent className="group bg-background">
                <MenuItem><a href="#">Link 1</a></MenuItem>
                <MenuItem>Take 2</MenuItem>
                <MenuItem>Take 3</MenuItem>
            </MenuContent>
        </Menu>

        <Menu {...args}>
            <MenuTrigger>
                <Avatar fallback="MU"></Avatar>
            </MenuTrigger>
            <MenuContent>
                <MenuItem><a href="#">Link 1</a></MenuItem>
                <MenuItem>Take 2</MenuItem>
                <MenuItem>Take 3</MenuItem>
            </MenuContent>
        </Menu>
    </div>
  )
};
