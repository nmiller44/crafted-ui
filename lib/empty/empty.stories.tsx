import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Empty } from './Empty';
import { Button } from '~/button';

const meta = {
  title: 'CraftedUI/Components/Empty',
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof Empty>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8">
      <Empty 
        title="No Beers on Tap" 
        subtitle="Add your first beer to get started." 
        {...args}
      />
      
      <Empty 
        title="Empty Inventory" 
        subtitle="Start adding products to your inventory." 
        {...args}
      />
      
      <Empty 
        title="No Items Found" 
        subtitle="Try adjusting your filters or search terms."
        {...args}
      />
    </div>
  )
};

export const WithActions: Story = {
  args: {},
  render: (args) => {
    const [isFiltered, setIsFiltered] = React.useState(true);
    
    return (
      <Empty 
        title={isFiltered ? "No Items Found" : "Showing All Items"} 
        subtitle={isFiltered ? "Try clearing your filters to see all available items." : "All filters have been cleared."}
        {...args}
      >
        <div className="flex gap-3 justify-center mt-6">
          <Button 
            clr="primary"
            onClick={() => setIsFiltered(false)}
          >
            Clear Filters
          </Button>
          <Button 
            outline
            onClick={() => alert('Viewing all items...')}
          >
            View All Items
          </Button>
        </div>
      </Empty>
    );
  }
};

export const CustomContent: Story = {
  args: {},
  render: (args) => {
    const [count, setCount] = React.useState(0);
    
    return (
      <Empty {...args}>
        <div className="space-y-4">
          <div className="text-6xl">🍺</div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Empty Tap Line</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Your keg lineup is looking a bit dry. Time to tap a fresh one!
            </p>
            {count > 0 && (
              <p className="text-sm text-primary mt-2">
                {count} {count === 1 ? 'beer' : 'beers'} added!
              </p>
            )}
          </div>
          <Button 
            clr="primary"
            onClick={() => setCount(prev => prev + 1)}
          >
            Add Beer
          </Button>
        </div>
      </Empty>
    );
  }
};
