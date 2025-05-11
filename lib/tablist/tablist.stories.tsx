import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tablist } from './Tablist';
import { TablistItem } from './TablistItem';

const meta = {
  title: 'CraftedUI/Components/Tablist',
  component: Tablist,
} satisfies Meta<typeof Tablist>;

export default meta;
type Story = StoryObj<typeof Tablist>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-12 px-4 py-2">
            <Tablist bordered>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-background">
            <Tablist bordered>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-background">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-primary">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-foreground">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
    </div>
  )
};
