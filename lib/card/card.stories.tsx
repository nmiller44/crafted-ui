import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

const meta = {
  title: 'CraftedUI/Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <Card {...args} title="No data available" subtitle="Please check back later." />
    </div>
  )
};

export const Body: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <Card {...args} body title="No data available" subtitle="Please check back later.">
            Info...
        </Card>
    </div>
  )
};

export const Full: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
        <Card {...args}>
            <CardHeader title="No data available" subtitle="Please check back later." />
            <CardBody>
                Info...
            </CardBody>
            <CardFooter>
                Footer content
            </CardFooter>
        </Card>
    </div>
  )
};
