import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { MenuContent } from './MenuContent';
import { MenuItem } from './MenuItem';
import { MenuTrigger } from './MenuTrigger';

import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';

const meta = {
  title: 'CraftedUI/Components/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex items-center justify-between p-6 bg-background border border-border rounded-lg">
        <div className="flex items-center space-x-4">
            <Avatar username="Sarah Chen" />
            <div>
                <div className="font-medium text-sm">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">Brewmaster</div>
            </div>
        </div>
        <Menu {...args}>
            <MenuTrigger>
                <Button clr="blank" outline>Actions</Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem>View Profile</MenuItem>
                <MenuItem>Edit Permissions</MenuItem>
                <MenuItem>Send Message</MenuItem>
                <MenuItem>View Activity</MenuItem>
            </MenuContent>
        </Menu>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6">
        <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">With Button:</span>
            <Menu {...args}>
                <MenuTrigger>
                    <Button>Open Menu</Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem>New Batch</MenuItem>
                    <MenuItem>View Inventory</MenuItem>
                    <MenuItem>Export Report</MenuItem>
                </MenuContent>
            </Menu>
        </div>

        <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">With Avatar:</span>
            <Menu {...args}>
                <MenuTrigger>
                    <Avatar username="Mike Johnson" />
                </MenuTrigger>
                <MenuContent>
                    <MenuItem>View Profile</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Sign Out</MenuItem>
                </MenuContent>
            </Menu>
        </div>

        <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">With Primary Button:</span>
            <Menu {...args}>
                <MenuTrigger>
                    <Button clr="primary">Actions</Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem>Create New</MenuItem>
                    <MenuItem>Import Data</MenuItem>
                    <MenuItem>Export Data</MenuItem>
                    <MenuItem>Archive Old Records</MenuItem>
                </MenuContent>
            </Menu>
        </div>
    </div>
  )
};

export const WithActions: Story = {
  args: {},
  render: (args) => {
    const [lastAction, setLastAction] = React.useState<string>('None');

    const handleAction = (action: string) => {
        setLastAction(action);
    };

    return (
        <div className="space-y-6">
            <div className="p-4 bg-muted rounded-md">
                <div className="text-sm font-medium mb-2">Last Action:</div>
                <div className="text-sm text-muted-foreground">{lastAction}</div>
            </div>

            <div className="flex space-x-4">
                <Menu {...args}>
                    <MenuTrigger>
                        <Button clr="primary">Brewing Actions</Button>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem onClick={() => handleAction('Started New Batch')}>Start New Batch</MenuItem>
                        <MenuItem onClick={() => handleAction('Checked Temperature')}>Check Temperature</MenuItem>
                        <MenuItem onClick={() => handleAction('Adjusted pH Level')}>Adjust pH</MenuItem>
                        <MenuItem onClick={() => handleAction('Recorded Gravity Reading')}>Record Gravity</MenuItem>
                    </MenuContent>
                </Menu>

                <Menu {...args}>
                    <MenuTrigger>
                        <Button clr="blank" outline>Inventory</Button>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem onClick={() => handleAction('Viewed Hops Inventory')}>View Hops</MenuItem>
                        <MenuItem onClick={() => handleAction('Viewed Malt Inventory')}>View Malt</MenuItem>
                        <MenuItem onClick={() => handleAction('Viewed Yeast Inventory')}>View Yeast</MenuItem>
                        <MenuItem onClick={() => handleAction('Ordered Supplies')}>Order Supplies</MenuItem>
                    </MenuContent>
                </Menu>
            </div>
        </div>
    );
  }
};
