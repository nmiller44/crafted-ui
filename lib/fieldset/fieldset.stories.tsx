import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Fieldset } from './Fieldset';
import { FieldsetButtons } from './FieldsetButtons';
import { Card } from '../card/Card';
import { Field } from '../field/Field';
import { FieldLabel } from '../field/FieldLabel';
import { Input } from '../input/Input';
import { Button } from '../button/Button';

const meta = {
  title: 'CraftedUI/Forms/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
        <Card body className="grow">
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
                <FieldsetButtons>
                    <Button outline clr="blank"
                        type="button" 
                    >
                        Cancel
                    </Button>
                    <Button type="submit" clr="primary">
                        Add Product
                    </Button>
                </FieldsetButtons>
            </Fieldset>
        </Card>
        
    </div>
  )
};

export const Grid: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
        <Card body className="grow">
            <Fieldset {...args} 
              title="Update Product" 
              subtitle="Enter new product information."
              grid>
                <Field>
                        <FieldLabel>Labelled Input</FieldLabel>
                        <Input />
                </Field>
                <Field className="col-span-6">
                        <FieldLabel>Labelled Input</FieldLabel>
                        <Input />
                </Field>
                <Field className="col-span-6">
                        <FieldLabel>Labelled Input</FieldLabel>
                        <Input />
                </Field>
                <Field>
                        <FieldLabel>Labelled Input</FieldLabel>
                        <Input />
                </Field>
                <FieldsetButtons>
                    <Button outline clr="blank"
                        type="button" 
                    >
                        Cancel
                    </Button>
                    <Button type="submit" clr="primary">
                        Update Product
                    </Button>
                </FieldsetButtons>
            </Fieldset>
        </Card>
        
    </div>
  )
};
