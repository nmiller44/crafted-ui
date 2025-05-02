import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Fieldset } from './Fieldset';
import { Card } from '../card/Card';
import { Field } from '../field/Field';
import { FieldLabel } from '../field/FieldLabel';
import { Input } from '../input/input';

const meta = {
  title: 'CraftedUI/Components/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex">
        <Card body>
            <Fieldset {...args} title="Update Product" subtitle="Enter new product information.">
                <Field>
                        <FieldLabel>Labelled Input</FieldLabel>
                        <Input />
                </Field>
                <Field>
                        <FieldLabel>Labelled Input</FieldLabel>
                        <Input />
                </Field>
                <Field>
                        <FieldLabel>Labelled Input</FieldLabel>
                        <Input />
                </Field>
            </Fieldset>
        </Card>
        
    </div>
  )
};
