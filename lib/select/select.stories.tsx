import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { SelectOption } from './SelectOption';
import { Field } from '../field/Field';

const meta = {
  title: 'CraftedUI/Forms/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {},
  render: (args) => {
    const beerStyles = [
      { value: 'ipa', label: 'IPA' },
      { value: 'stout', label: 'Stout' },
      { value: 'lager', label: 'Lager' },
    ];

    return (
      <div className="flex flex-col space-y-12 grow">
        <div className="w-64">
          <Field label="Choose a beer style">
            <Select items={beerStyles} />
          </Field>
        </div>
      </div>
    );
  }
};

export const WithDefaultValue: Story = {
  args: {},
  render: (args) => {
    const beerTypes = [
      { value: 'pilsner', label: 'Pilsner' },
      { value: 'pale-ale', label: 'Pale Ale (Default)' },
      { value: 'wheat-beer', label: 'Wheat Beer' },
    ];

    return (
      <div className="flex flex-col space-y-12 grow">
        <div className="w-64">
          <Field label="Preferred beer type">
            <Select items={beerTypes} defaultValue="pale-ale" />
          </Field>
        </div>
      </div>
    );
  }
};

export const WithManyOptions: Story = {
  args: {},
  render: (args) => {
    const beerStyles = [
      { value: 'ipa', label: 'India Pale Ale (IPA)' },
      { value: 'stout', label: 'Stout' },
      { value: 'porter', label: 'Porter' },
      { value: 'lager', label: 'Lager' },
      { value: 'pilsner', label: 'Pilsner' },
      { value: 'wheat', label: 'Wheat Beer' },
      { value: 'saison', label: 'Saison' },
      { value: 'sour', label: 'Sour Ale' },
      { value: 'belgian', label: 'Belgian Ale' },
      { value: 'barleywine', label: 'Barleywine' },
      { value: 'amber', label: 'Amber Ale' },
      { value: 'brown', label: 'Brown Ale' },
    ];

    return (
      <div className="flex flex-col space-y-12 grow">
        <div className="w-64">
          <Field label="Beer styles">
            <Select items={beerStyles} />
          </Field>
        </div>
      </div>
    );
  }
};

export const Disabled: Story = {
  args: {},
  render: (args) => {
    const unavailableBeers = [
      { value: 'seasonal', label: 'Seasonal IPA' },
      { value: 'limited', label: 'Limited Edition Stout' },
      { value: 'experimental', label: 'Experimental Brew' },
    ];

    return (
      <div className="flex flex-col space-y-12 grow">
        <div className="w-64">
          <Field label="Unavailable beer (out of stock)">
            <Select items={unavailableBeers} disabled defaultValue="seasonal" />
          </Field>
        </div>
      </div>
    );
  }
};

export const Custom_Styling: Story = {
  args: {},
  render: (args) => {
    const tastingFlight = [
      { value: 'pale-ale', label: '🍺 Pale Ale' },
      { value: 'stout', label: '🖤 Imperial Stout' },
      { value: 'wheat', label: '🌾 Wheat Beer' },
      { value: 'sour', label: '🍋 Sour Ale' },
    ];

    return (
      <div className="flex flex-col space-y-12 grow">
        <div className="w-64">
          <Field label="Brewery tasting flight">
            <Select items={tastingFlight} className="border-2 border-amber-300 rounded-lg">
              {tastingFlight.map((beer) => (
                <SelectOption key={beer.value} value={beer.value}>
                  {beer.label}
                </SelectOption>
              ))}
            </Select>
          </Field>
        </div>
      </div>
    );
  }
};
