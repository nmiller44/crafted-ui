import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Combobox } from './Combobox';
import { ComboboxOption } from './ComboboxOption';
import { Field, FieldLabel } from '../field';
import { Badge } from '../badge';

const meta = {
  title: 'CraftedUI/Forms/Combobox',
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

const beerStyles = [
  { value: 'ipa', label: 'IPA' },
  { value: 'stout', label: 'Stout' },
  { value: 'porter', label: 'Porter' },
  { value: 'lager', label: 'Lager' },
  { value: 'pilsner', label: 'Pilsner' },
  { value: 'wheat', label: 'Wheat Beer' },
  { value: 'saison', label: 'Saison' },
  { value: 'sour', label: 'Sour Ale' },
  { value: 'belgian', label: 'Belgian Ale' },
  { value: 'amber', label: 'Amber Ale' },
  { value: 'brown', label: 'Brown Ale' },
  { value: 'pale-ale', label: 'Pale Ale' },
];

const breweries = [
  { value: 'deschutes', label: 'Deschutes Brewery' },
  { value: 'sierra-nevada', label: 'Sierra Nevada' },
  { value: 'stone', label: 'Stone Brewing' },
  { value: 'lagunitas', label: 'Lagunitas' },
  { value: 'new-belgium', label: 'New Belgium' },
  { value: 'bells', label: 'Bell\'s Brewery' },
  { value: 'dogfish', label: 'Dogfish Head' },
  { value: 'founders', label: 'Founders Brewing' },
];

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg space-y-6">
      <Field>
        <FieldLabel>Search Beer Styles</FieldLabel>
        <Combobox items={beerStyles} placeholder="Type to search..." defaultValue={beerStyles[0]} />
      </Field>
      <Field>
        <FieldLabel>Search Brewery</FieldLabel>
        <Combobox items={breweries} placeholder="Find a brewery..." />
      </Field>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <Combobox items={beerStyles} placeholder="Unlabeled combobox" />
      </Field>

      <Field>
        <FieldLabel>With Label</FieldLabel>
        <Combobox items={beerStyles} placeholder="Search beer styles..." />
      </Field>
      
      <Field>
        <FieldLabel>With Error</FieldLabel>
        <Combobox items={beerStyles} data-invalid placeholder="This field has an error" />
      </Field>
      
      <Field>
        <FieldLabel>Disabled</FieldLabel>
        <Combobox items={beerStyles} disabled defaultValue={beerStyles.find(b => b.value === 'stout')} />
      </Field>
      
      <Field>
        <FieldLabel>With Default Value</FieldLabel>
        <Combobox items={beerStyles} defaultValue={beerStyles.find(b => b.value === 'pilsner')} placeholder="Search..." />
      </Field>

      <Field>
        <FieldLabel>Empty State</FieldLabel>
        <Combobox items={[]} placeholder="Type to search (no items)..." />
      </Field>
    </div>
  )
};

export const WithManyOptions: Story = {
  args: {},
  render: (args) => {
    const manyBeerStyles = [
      { value: 'ipa', label: 'India Pale Ale (IPA)' },
      { value: 'neipa', label: 'New England IPA' },
      { value: 'dipa', label: 'Double IPA' },
      { value: 'session-ipa', label: 'Session IPA' },
      { value: 'stout', label: 'Stout' },
      { value: 'imperial-stout', label: 'Imperial Stout' },
      { value: 'porter', label: 'Porter' },
      { value: 'lager', label: 'Lager' },
      { value: 'pilsner', label: 'Pilsner' },
      { value: 'wheat', label: 'Wheat Beer' },
      { value: 'hefeweizen', label: 'Hefeweizen' },
      { value: 'saison', label: 'Saison' },
      { value: 'sour', label: 'Sour Ale' },
      { value: 'gose', label: 'Gose' },
      { value: 'belgian', label: 'Belgian Ale' },
      { value: 'dubbel', label: 'Belgian Dubbel' },
      { value: 'tripel', label: 'Belgian Tripel' },
      { value: 'barleywine', label: 'Barleywine' },
      { value: 'amber', label: 'Amber Ale' },
      { value: 'brown', label: 'Brown Ale' },
      { value: 'pale-ale', label: 'Pale Ale' },
      { value: 'kolsch', label: 'Kölsch' },
      { value: 'bock', label: 'Bock' },
      { value: 'oktoberfest', label: 'Oktoberfest' },
    ];

    return (
      <div className="max-w-sm">
        <Field>
          <FieldLabel>Search Beer Styles</FieldLabel>
          <Combobox items={manyBeerStyles} placeholder="Type to filter..." />
        </Field>
      </div>
    );
  }
};

export const WithCustomOptions: Story = {
  args: {},
  render: (args) => {
    const beerStylesWithBadges = [
      { value: 'ipa', label: 'IPA', type: 'Hoppy' },
      { value: 'stout', label: 'Stout', type: 'Dark' },
      { value: 'lager', label: 'Lager', type: 'Light' },
      { value: 'pilsner', label: 'Pilsner', type: 'Light' },
      { value: 'porter', label: 'Porter', type: 'Dark' },
      { value: 'saison', label: 'Saison', type: 'Hoppy' },
    ];

    const getColorForType = (type: string) => {
      switch (type) {
        case 'Hoppy':
          return 'success';
        case 'Dark':
          return 'destructive';
        case 'Light':
          return 'warning';
        default:
          return 'secondary';
      }
    };

    return (
      <div className="max-w-sm">
        <Field>
          <FieldLabel>Beer Style with Type</FieldLabel>
          <Combobox {...args}>
            {beerStylesWithBadges.map((beer) => (
              <ComboboxOption key={beer.value} value={beer}>
                <div className="flex items-center justify-between w-full">
                  <span>{beer.label}</span>
                  <Badge clr={getColorForType(beer.type) as any} size="sm">
                    {beer.type}
                  </Badge>
                </div>
              </ComboboxOption>
            ))}
          </Combobox>
        </Field>
      </div>
    );
  }
};

export const Controlled: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = React.useState(beerStyles[0]);
    const [inputValue, setInputValue] = React.useState<string>('');

    return (
      <div className="max-w-sm space-y-4">
        <Field>
          <FieldLabel>Controlled Combobox</FieldLabel>
          <Combobox 
            items={beerStyles} 
            value={value}
            onValueChange={setValue}
            inputValue={inputValue}
            onInputValueChange={setInputValue}
            placeholder="Search..." 
          />
        </Field>
        <div className="p-4 bg-muted rounded-md space-y-2">
          <div className="text-sm">
            <strong>Selected Value:</strong> {value?.label || 'None'}
          </div>
          <div className="text-sm">
            <strong>Input Value:</strong> {inputValue || 'None'}
          </div>
        </div>
      </div>
    );
  }
};
