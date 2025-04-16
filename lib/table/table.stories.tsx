import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { 
  Table, 
  TableHead, 
  TableHeadCell, 
  TableBody, 
  TableRow, 
  TableCell 
} from '~/table';
import { Card, CardBody } from '~/card';

const meta = {
  title: 'CraftedUI/Components/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
      <Card>
        <CardBody>
          <Table {...args}>
            <TableHead>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Jane Cooper</TableCell>
                <TableCell>jane.cooper@example.com</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wade Warren</TableCell>
                <TableCell>wade.warren@example.com</TableCell>
                <TableCell>Inactive</TableCell>
                <TableCell>Developer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Esther Howard</TableCell>
                <TableCell>esther.howard@example.com</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Designer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
};

export const WithCustomStyling: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
      <Card>
        <CardBody>
          <Table {...args}>
            <TableHead className="bg-primary/10">
              <TableHeadCell className="text-primary">Product</TableHeadCell>
              <TableHeadCell className="text-primary">Price</TableHeadCell>
              <TableHeadCell className="text-primary">Quantity</TableHeadCell>
              <TableHeadCell className="text-primary">Total</TableHeadCell>
            </TableHead>
            <TableBody>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">Widget A</TableCell>
                <TableCell>$10.00</TableCell>
                <TableCell>5</TableCell>
                <TableCell className="font-bold">$50.00</TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">Widget B</TableCell>
                <TableCell>$15.00</TableCell>
                <TableCell>2</TableCell>
                <TableCell className="font-bold">$30.00</TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">Widget C</TableCell>
                <TableCell>$20.00</TableCell>
                <TableCell>3</TableCell>
                <TableCell className="font-bold">$60.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
};

export const WithColspan: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
      <Card>
        <CardBody>
          <Table {...args}>
            <TableHead>
              <TableHeadCell>Item</TableHeadCell>
              <TableHeadCell colspan={2}>Details</TableHeadCell>
              <TableHeadCell>Value</TableHeadCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Invoice #001</TableCell>
                <TableCell colspan={2}>Annual subscription</TableCell>
                <TableCell>$599.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Invoice #002</TableCell>
                <TableCell>Monthly service</TableCell>
                <TableCell>Premium tier</TableCell>
                <TableCell>$59.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colspan={3}>Total</TableCell>
                <TableCell className="font-bold">$658.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
};

export const TableInCard: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
      <Card>
        <Table {...args}>
          <TableHead>
              <TableHeadCell>Product</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>ABV</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Stock</TableHeadCell>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell className="font-medium">Crisp Apple Cider</TableCell>
                <TableCell>Cider</TableCell>
                <TableCell>5.0%</TableCell>
                <TableCell>$12.99</TableCell>
                <TableCell>In Stock</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Hazy IPA</TableCell>
                <TableCell>Beer</TableCell>
                <TableCell>6.5%</TableCell>
                <TableCell>$14.99</TableCell>
                <TableCell>Low Stock</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Raspberry Sour</TableCell>
                <TableCell>Beer</TableCell>
                <TableCell>4.2%</TableCell>
                <TableCell>$13.99</TableCell>
                <TableCell>In Stock</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bourbon Barrel Stout</TableCell>
                <TableCell>Beer</TableCell>
                <TableCell>9.8%</TableCell>
                <TableCell>$18.99</TableCell>
                <TableCell>Out of Stock</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
};