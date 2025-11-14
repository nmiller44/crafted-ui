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
                title="Beer Styles" 
                subtitle="Select your favorite craft beer styles"
            >
                <Field>
                    <CheckboxGroup>
                        <Checkbox {...args}>IPA</Checkbox>
                        <Checkbox {...args} defaultChecked>Stout</Checkbox>
                        <Checkbox {...args}>Pilsner</Checkbox>
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
          title="Hop Varieties" 
          subtitle="Select your preferred hop profiles"
        >
          <Field>
            <CheckboxGroup horizontal>
                <Checkbox {...args}>Citra</Checkbox>
                <Checkbox {...args} defaultChecked>Mosaic</Checkbox>
                <Checkbox {...args}>Cascade</Checkbox>
            </CheckboxGroup>
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};

export const BeerPackagingSizes: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
      <Card body className="grow">
        <Fieldset 
          title="Craft Beer Package Sizes" 
          subtitle="Select your preferred packaging options"
        >
          <Field>
            <CheckboxGroup>
              <Checkbox {...args} size="xs">Nip</Checkbox>
              <Checkbox {...args} size="sm">Sleek</Checkbox>
              <Checkbox {...args} size="md" defaultChecked>Tallboy</Checkbox>
              <Checkbox {...args} size="lg">Bomber</Checkbox>
              <Checkbox {...args} size="xl">Crowler</Checkbox>
            </CheckboxGroup>
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};

export const LabelingOptions: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
      <Card body className="grow">
        <Fieldset 
          title="Brewery Features" 
          subtitle="Different ways to label checkboxes"
        >
          <Field>
            <CheckboxGroup>
              <Checkbox {...args}>Taproom</Checkbox>
              <Checkbox {...args} title="Outdoor Seating" />
              <Checkbox {...args} title="Flight Options" subtitle="Sample multiple beers in smaller portions" />
              <Checkbox {...args} title="Seasonal Releases" subtitle="Limited edition and experimental brews" defaultChecked />
              <Checkbox {...args} subtitle="This has only subtitle prop">Should not show main text</Checkbox>
            </CheckboxGroup>
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};

export const HorizontalWithSubtitles: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-lg">
      <Card body className="grow">
        <Fieldset 
          title="Brewing Methods" 
          subtitle="Select your preferred brewing techniques"
        >
          <Field>
            <CheckboxGroup horizontal className="gap-6">
              <Checkbox {...args} title="Barrel-Aged" />
              <Checkbox {...args} title="Dry-Hopped" subtitle="Enhanced hop aroma and flavor" defaultChecked />
              <Checkbox {...args} title="Sour Mash" subtitle="Traditional acidic fermentation" />
            </CheckboxGroup>
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};


