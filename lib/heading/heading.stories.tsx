import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Heading1 } from './Heading1';
import { Heading2 } from './Heading2';
import { Heading3 } from './Heading3';
import { Heading4 } from './Heading4';
import { Heading5 } from './Heading5';
import { Card, CardBody } from '../card';
import { Button } from '../button';
import { IconDownload } from '../icons';

const meta = {
  title: 'CraftedUI/Typography/Heading',
  component: Heading1,
} satisfies Meta<typeof Heading1>;

export default meta;
type Story = StoryObj<typeof Heading1>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-3xl space-y-12">
      <div>
        <Heading1 {...args} title="Craft Beer Brewing Guide" subtitle="Everything you need to know about homebrewing">
          <Button clr="primary">Get Started</Button>
        </Heading1>
        <div className="mt-8 space-y-8">
          <Heading2 title="Getting Started" subtitle="Essential equipment and ingredients" />
          <p className="text-muted-foreground">
            Before you begin brewing, it's important to gather the right equipment...
          </p>
          
          <Heading3 title="Equipment Checklist" subtitle="What you'll need for your first batch">
            <Button clr="secondary" ghost>
              <IconDownload />
            </Button>
          </Heading3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Brew kettle (5+ gallon capacity)</li>
            <li>Fermentation vessel</li>
            <li>Airlock and stopper</li>
          </ul>

          <Heading4 title="Sanitation Basics">
            <Button outline clr="blank">Learn More</Button>
          </Heading4>
          <p className="text-muted-foreground">
            Clean and sanitized equipment is crucial for successful brewing...
          </p>

          <Heading5 title="Pro Tip" subtitle="Always sanitize twice" />
        </div>
      </div>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-12">
      <div className="space-y-6">
        <Heading1 {...args} title="Heading One" subtitle="Largest heading for page titles" />
        <Heading2 {...args} title="Heading Two" subtitle="Major section headings" />
        <Heading3 {...args} title="Heading Three" subtitle="Subsection headings" />
        <Heading4 {...args} title="Heading Four" subtitle="Minor headings" />
        <Heading5 {...args} title="Heading Five" subtitle="Smallest semantic heading" />
      </div>
    </div>
  )
};

export const HeadingUsageOptions: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8 max-w-3xl">
      <Heading1
        {...args}
        title="Pale Ale Tasting Notes"
        subtitle="Bright citrus aroma with a crisp finish"
      />

      <Heading1 {...args} subtitle="Children passed as plain text is auto-styled as h1">
        Session IPA Profile
      </Heading1>

      <Heading1 {...args} subtitle="Children passed as custom elements render as-is">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
          <span>🍺</span>
          <span>Custom Heading Layout</span>
        </h1>
      </Heading1>
    </div>
  )
};

export const WithCustomContent: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8">
      <Heading1 subtitle="Using children instead of title prop">
        <h1>Custom <span className="text-primary">Styled</span> Heading</h1>
      </Heading1>

      <Heading2 subtitle="With icons and badges">
        <h2 className="flex items-center gap-2">
          <span>🍺</span>
          <span>IPA Recipes</span>
        </h2>
      </Heading2>

      <Heading3 subtitle="Complex layout">
        <h3 className="flex items-baseline justify-between">
          <span>Batch #2024-001</span>
          <span className="text-sm font-normal text-muted-foreground">Active</span>
        </h3>
      </Heading3>
    </div>
  )
};

export const CustomStyling: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8">
      <Heading1 
        title="Imperial Stout"
        subtitle="Dark, rich, and full-bodied"
        className="text-primary"
        subtitleClass="text-lg"
        wrapperClass="space-y-3"
      />

      <Heading2
        title="West Coast IPA"
        subtitle="ABV: 6.5% • IBU: 65 • SRM: 8"
        className="font-normal tracking-normal"
      />

      <Card>
        <CardBody>
          <Heading3 
            title="Fermentation Temperature"
            subtitle="Maintain 68°F for optimal results"
            wrapperClass="space-y-2"
          />
        </CardBody>
      </Card>
    </div>
  )
};

export const ActionButtons: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8 max-w-3xl">
      <Heading1 title="Brewing Recipes" subtitle="Explore our collection of craft beer recipes">
        <Button clr="primary">Add Recipe</Button>
      </Heading1>

      <Heading2 title="Active Batches" subtitle="Currently fermenting">
        <div className="flex gap-2">
          <Button outline>Filter</Button>
          <Button clr="primary">New Batch</Button>
        </div>
      </Heading2>

      <Heading3 title="Equipment Inventory">
        <Button clr="secondary" ghost>
          <IconDownload />
        </Button>
      </Heading3>

      <Heading3 title="Fermentation Logs" subtitle="Track temperature and gravity readings">
        <Button outline clr="blank">Export Data</Button>
      </Heading3>

      <Heading4 title="Yeast Strains">
        <Button clr="accent">Manage</Button>
      </Heading4>

      <Heading5 title="Hop Schedule" subtitle="Timing and quantities">
        <Button outline>Edit</Button>
      </Heading5>
    </div>
  )
};
