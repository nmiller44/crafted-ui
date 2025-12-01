import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta = {
  title: 'CraftedUI/Components/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    onPageChange: (page: number) => console.log('Page changed to:', page),
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">First Page</h3>
          <Pagination
            {...args}
            currentPage={1}
            onPageChange={setCurrentPage}
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Middle Page</h3>
          <Pagination
            {...args}
            currentPage={5}
            onPageChange={setCurrentPage}
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Last Page</h3>
          <Pagination
            {...args}
            currentPage={10}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  }
};

export const Interactive: Story = {
  args: {
    totalItems: 250,
    itemsPerPage: 10,
    currentPage: 1,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);
    
    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Click on page numbers to navigate</p>
        </div>
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  }
};

export const LargeDataset: Story = {
  args: {
    totalItems: 1000,
    itemsPerPage: 25,
    currentPage: 15,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  }
};

export const SmallDataset: Story = {
  args: {
    totalItems: 30,
    itemsPerPage: 10,
    currentPage: 2,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  }
};

export const WithoutInfo: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 5,
    showInfo: false,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);
    
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Info text hidden with showInfo=false</p>
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  }
};

export const DifferentSiblingCount: Story = {
  args: {
    totalItems: 200,
    itemsPerPage: 10,
    currentPage: 10,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Sibling Count: 0</h3>
          <Pagination
            {...args}
            siblingCount={0}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Sibling Count: 1 (default)</h3>
          <Pagination
            {...args}
            siblingCount={1}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Sibling Count: 2</h3>
          <Pagination
            {...args}
            siblingCount={2}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  }
};
