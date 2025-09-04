import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';
import { Field } from '../field/Field';
import { Card } from '../card/Card';
import { Fieldset } from '../fieldset/Fieldset';

const meta = {
  title: 'CraftedUI/Forms/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
        <Card body className="grow">
            <Fieldset 
                title="Options" 
                subtitle="Select your preferred options"
            >
                <Field>
                    <CheckboxGroup>
                        <Checkbox {...args}>Words</Checkbox>
                        <Checkbox {...args} defaultChecked>Numbers</Checkbox>
                        <Checkbox {...args}>Symbols</Checkbox>
                    </CheckboxGroup>
                </Field>
            </Fieldset>
        </Card>
    </div>
  )
};

export const Horizontal: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
      <Card body className="grow">
        <Fieldset 
          title="Features" 
          subtitle="Select the features you want to enable"
        >
          <Field>
            <CheckboxGroup className="flex-row">
                <Checkbox {...args}>Notifications</Checkbox>
                <Checkbox {...args} defaultChecked>Analytics</Checkbox>
                <Checkbox {...args}>Auto-save</Checkbox>
            </CheckboxGroup>
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};


