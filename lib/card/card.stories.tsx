import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { Metric as MetricBlock } from '../metric/Metric';
import { Heading4 } from '../heading';
import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from '../table';

const meta = {
  title: 'CraftedUI/Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow max-w-md">
        <Card {...args} title="West Coast IPA" subtitle="American IPA - 7.2% ABV">
            <CardBody>
                <p className="text-sm text-muted-foreground mb-4">
                    Bold and bitter with pine and citrus hop character. Crisp, dry finish 
                    showcasing Cascade, Centennial, and Chinook hops.
                </p>
                <div className="flex gap-4 text-sm">
                    <div>
                        <span className="font-medium">IBU:</span> 68
                    </div>
                    <div>
                        <span className="font-medium">SRM:</span> 8
                    </div>
                </div>
            </CardBody>
            <CardFooter>
                <span className="text-sm text-muted-foreground">Available in 16oz cans and on draft</span>
            </CardFooter>
        </Card>
    </div>
  )
};

export const Body: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow max-w-md">
        <Card {...args} body>
            The body prop will automatically add CardBody for padding.
        </Card>
    </div>
  )
};

export const Full: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow max-w-xl">
        <Card {...args} body full>
            The body prop will automatically add CardBody for padding.
            When using full, the border, shadow, and padding will disappear on mobile
            for a full width view.
        </Card>
    </div>
  )
};

export const Metrics: Story = {
  args: {},
  render: (args) => (
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card {...args} slim>
          <MetricBlock title="Total Kegs" value="318" />
        </Card>
        <Card {...args} slim>
          <MetricBlock title="Needs Refill" value="24" />
        </Card>
        <Card {...args} slim>
          <MetricBlock title="In Transit" value="11" />
        </Card>
      </div>
    </div>
  )
};

export const TableCard: Story = {
  args: {},
  render: (args) => (
    <div className="w-full max-w-2xl space-y-4">
      <Heading4 title="Taproom Lineup" subtitle="Currently pouring" />
      <Card {...args}>
        <Table>
          <TableHead>
            <TableHeadCell>Beer</TableHeadCell>
            <TableHeadCell>Style</TableHeadCell>
            <TableHeadCell>ABV</TableHeadCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>West Coast IPA</TableCell>
              <TableCell>American IPA</TableCell>
              <TableCell>7.2%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Midnight Stout</TableCell>
              <TableCell>Oatmeal Stout</TableCell>
              <TableCell>5.8%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Harvest Saison</TableCell>
              <TableCell>Farmhouse Ale</TableCell>
              <TableCell>6.4%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="px-4 py-4">
          <span className="text-sm text-muted-foreground">3 taps active</span>
        </div>
      </Card>
    </div>
  )
};
