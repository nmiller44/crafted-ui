import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';
import { Card } from '../card/Card';
import { Fieldset } from '../fieldset/Fieldset';
import { Field } from '../field/Field';

const meta = {
  title: 'CraftedUI/Forms/Radio',
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
      <Card body className="grow">
        <Fieldset 
          title="Style" 
          subtitle="What is your preferred style?"
        >
            <Field>
                <RadioGroup {...args}>
                    <Radio value="ale">Ale</Radio>
                    <Radio value="lager">Lager</Radio>
                    <Radio value="na">Non-Alcoholic</Radio>
                </RadioGroup>
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
          title="Priority Level" 
          subtitle="Select your preferred priority setting"
        >
          <Field>
            <RadioGroup defaultValue="ale" className="flex-row space-x-6 space-y-0" {...args}>
                <Radio value="ale">Ale</Radio>
                <Radio value="lager">Lager</Radio>
                <Radio value="na">Non-Alcoholic</Radio>
            </RadioGroup>
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};
