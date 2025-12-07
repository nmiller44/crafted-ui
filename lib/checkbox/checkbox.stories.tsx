import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';
import { Field } from '../field/Field';
import { Fieldset } from '../fieldset/Fieldset';

const meta = {
  title: 'CraftedUI/Forms/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg">
      <Fieldset 
        title="Beer Preferences" 
        subtitle="Select your favorite craft beer styles and features"
      >
        <Field>
          <CheckboxGroup>
            <Checkbox defaultChecked>IPA</Checkbox>
            <Checkbox>Stout</Checkbox>
            <Checkbox title="Barrel-Aged" subtitle="Aged in oak barrels for complex flavors" />
            <Checkbox title="Seasonal Releases" subtitle="Limited edition and experimental brews" defaultChecked />
          </CheckboxGroup>
        </Field>
      </Fieldset>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <CheckboxGroup>
          <Checkbox>Unlabeled checkbox</Checkbox>
        </CheckboxGroup>
      </Field>

      <Field>
        <Fieldset title="With Label">
          <CheckboxGroup>
            <Checkbox>Pilsner</Checkbox>
            <Checkbox defaultChecked>Lager</Checkbox>
          </CheckboxGroup>
        </Fieldset>
      </Field>
      
      <Field>
        <Fieldset title="With Error">
          <CheckboxGroup>
            <Checkbox aria-invalid>This checkbox has an error</Checkbox>
          </CheckboxGroup>
        </Fieldset>
      </Field>
      
      <Field>
        <Fieldset title="Disabled">
          <CheckboxGroup>
            <Checkbox disabled>This checkbox is disabled</Checkbox>
            <Checkbox disabled defaultChecked>This is disabled and checked</Checkbox>
          </CheckboxGroup>
        </Fieldset>
      </Field>
    </div>
  )
};

export const Horizontal: Story = {
  args: {},
  render: (args) => (
    <Fieldset 
      title="Hop Varieties" 
      subtitle="Select your preferred hop profiles"
    >
      <Field>
        <CheckboxGroup horizontal>
          <Checkbox>Citra</Checkbox>
          <Checkbox defaultChecked>Mosaic</Checkbox>
          <Checkbox>Cascade</Checkbox>
        </CheckboxGroup>
      </Field>
    </Fieldset>
  )
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Fieldset 
      title="Craft Beer Package Sizes" 
      subtitle="Select your preferred packaging options"
    >
      <Field>
        <CheckboxGroup>
          <Checkbox size="xs">Nip</Checkbox>
          <Checkbox size="sm">Sleek</Checkbox>
          <Checkbox size="md" defaultChecked>Tallboy</Checkbox>
          <Checkbox size="lg">Bomber</Checkbox>
          <Checkbox size="xl">Crowler</Checkbox>
        </CheckboxGroup>
      </Field>
    </Fieldset>
  )
};

export const WithSubtitles: Story = {
  args: {},
  render: (args) => (
    <Fieldset 
      title="Brewery Features" 
      subtitle="Different ways to label checkboxes"
    >
      <Field>
        <CheckboxGroup>
          <Checkbox>Taproom</Checkbox>
          <Checkbox title="Outdoor Seating" />
          <Checkbox title="Flight Options" subtitle="Sample multiple beers in smaller portions" />
          <Checkbox title="Seasonal Releases" subtitle="Limited edition and experimental brews" defaultChecked />
        </CheckboxGroup>
      </Field>
    </Fieldset>
  )
};


