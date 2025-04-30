import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Vertlist } from './Vertlist';
import { VertlistHeader } from './VertlistHeader';
import { VertlistItem } from './VertlistItem';
import { Heading4 } from '../heading/Heading4';

const meta = {
  title: 'CraftedUI/Components/Vertlist',
  component: Vertlist,
} satisfies Meta<typeof Vertlist>;

export default meta;
type Story = StoryObj<typeof Vertlist>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-2">
          <Heading4 title="Sizes" />   
          <div className="flex space-x-8 items-center">
            <Vertlist {...args} className="w-sidebar">
                <VertlistHeader>Header</VertlistHeader>
                <VertlistItem><a href="#">Link 1</a></VertlistItem>
                <VertlistItem><a href="#" className="active">Link 2</a></VertlistItem>
                <VertlistItem>Item 3</VertlistItem>
                <VertlistItem><a href="#">Link 4</a></VertlistItem>
            </Vertlist>

            <Vertlist {...args} className="w-sidebar group bg-background">
            <VertlistHeader>Header</VertlistHeader>
                <VertlistItem><a href="#">Link 1</a></VertlistItem>
                <VertlistItem><a href="#" className="active">Link 2</a></VertlistItem>
                <VertlistItem>Item 3</VertlistItem>
                <VertlistItem><a href="#">Link 4</a></VertlistItem>
            </Vertlist>
          </div>       
        </div>

        <div className="flex flex-col space-y-2">
          <Heading4 title="Custom Styling" />   
          <div className="flex space-x-8 items-center">  
          </div>       
        </div>

    </div>
  )
};
