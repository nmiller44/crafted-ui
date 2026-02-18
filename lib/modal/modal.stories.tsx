import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalDescription } from './ModalDescription';
import { ModalTitle } from './ModalTitle';
import { ModalTrigger } from './ModalTrigger';

import { Button } from '../button/Button';
import { Checkbox } from '../checkbox/Checkbox';
import { Field, FieldLabel } from '../field';
import { Fieldset } from '../fieldset/Fieldset';
import { FieldsetButtons } from '../fieldset/FieldsetButtons';
import { Input } from '../input/Input';
import { Radio } from '../radio/Radio';
import { RadioGroup } from '../radio/RadioGroup';
import { Select } from '../select/Select';
import { Textarea } from '../textarea/Textarea';

const meta = {
  title: 'CraftedUI/Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Feature: Story = {
  args: {},
  render: (args) => {
    const beerStyles = [
      { value: 'ipa', label: 'IPA' },
      { value: 'stout', label: 'Stout' },
      { value: 'porter', label: 'Porter' },
      { value: 'lager', label: 'Lager' },
      { value: 'pilsner', label: 'Pilsner' },
      { value: 'wheat', label: 'Wheat Beer' },
      { value: 'saison', label: 'Saison' },
    ];

    return (
      <Modal {...args} defaultOpen={true}>
        <ModalTrigger>
          <Button clr="primary">Submit Your Recipe</Button>
        </ModalTrigger>
        <ModalContent title="Homebrew Recipe Contest" size="lg">
          <ModalDescription className="text-sm text-muted-foreground">
            Enter our annual homebrew competition by submitting your recipe. Winners will have their beer brewed at our facility and featured in our taproom.
          </ModalDescription>
          
          <Fieldset grid>
            <Field className="col-span-full">
              <FieldLabel>Recipe Name</FieldLabel>
              <Input placeholder="e.g., Hoppy Trail IPA" />
            </Field>
            
            <Field className="col-span-8">
              <FieldLabel>Beer Style</FieldLabel>
              <Select items={beerStyles} placeholder="Choose a style..." />
            </Field>
            
            <Field className="col-span-4">
              <FieldLabel>ABV (%)</FieldLabel>
              <Input type="number" placeholder="6.5" />
            </Field>
            
            <Field className="col-span-full">
              <FieldLabel>Recipe Description</FieldLabel>
              <Textarea placeholder="Describe your recipe, ingredients, and brewing process..." rows={4} />
            </Field>
            
            <Field className="col-span-full">
              <Checkbox>I agree to the contest terms and conditions</Checkbox>
            </Field>
            
            <FieldsetButtons>
              <ModalClose>
                <Button clr="secondary" outline>Cancel</Button>
              </ModalClose>
              <Button clr="primary">Submit Recipe</Button>
            </FieldsetButtons>
          </Fieldset>
        </ModalContent>
      </Modal>
    )
  }
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-4">
      <Modal {...args} defaultOpen={true}>
        <ModalTrigger>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent title="Brewery Tour Confirmation" subtitle="January 20, 2026">
          <ModalDescription className="text-sm text-muted-foreground">
            Your tour has been confirmed for 2:00 PM. Please arrive 10 minutes early. You'll explore our brewing facility, barrel room, and enjoy samples of our seasonal releases.
          </ModalDescription>
          
          <div className="flex justify-end gap-3 pt-4">
            <ModalClose>
              <Button clr="secondary" outline>Close</Button>
            </ModalClose>
            <Button clr="primary">Add to Calendar</Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
};

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground max-w-2xl">
        Modal sizes control the width of the content area. Available sizes: <code className="text-xs bg-muted px-1 py-0.5 rounded">sm</code> (384px), <code className="text-xs bg-muted px-1 py-0.5 rounded">md</code> (512px), <code className="text-xs bg-muted px-1 py-0.5 rounded">lg</code> (640px), and <code className="text-xs bg-muted px-1 py-0.5 rounded">xl</code> (768px). Default is <code className="text-xs bg-muted px-1 py-0.5 rounded">md</code>.
      </div>
      
      <Modal {...args} defaultOpen={true}>
        <ModalTrigger>
          <Button>Large Modal Example</Button>
        </ModalTrigger>
        <ModalContent title="Tasting Flight Ratings" subtitle="Rate your experience" size="lg">
          <ModalDescription className="text-sm text-muted-foreground">
            Rate each beer in your flight on a scale of 1-5 stars. Your feedback helps us improve our brewing process.
          </ModalDescription>
          
          <Fieldset>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-medium text-sm mb-1">Hazy IPA</div>
                <div className="text-sm text-muted-foreground">7.2% ABV</div>
              </div>
              <div className="flex items-center justify-end gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-yellow-500 hover:text-yellow-600">★</button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-medium text-sm mb-1">Belgian Tripel</div>
                <div className="text-sm text-muted-foreground">9.1% ABV</div>
              </div>
              <div className="flex items-center justify-end gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-yellow-500 hover:text-yellow-600">★</button>
                ))}
              </div>
            </div>
            
            <Field>
              <FieldLabel>Additional Comments</FieldLabel>
              <Textarea placeholder="Share your thoughts..." rows={3} />
            </Field>
            
            <Field>
              <FieldLabel>Would you recommend this flight?</FieldLabel>
              <RadioGroup defaultValue="yes">
                <Radio value="yes">Yes, definitely</Radio>
                <Radio value="maybe">Maybe</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>
            </Field>
            
            <FieldsetButtons>
              <ModalClose>
                <Button clr="secondary" outline>Skip</Button>
              </ModalClose>
              <Button clr="primary">Submit Ratings</Button>
            </FieldsetButtons>
          </Fieldset>
        </ModalContent>
      </Modal>
    </div>
  )
};
