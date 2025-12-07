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
