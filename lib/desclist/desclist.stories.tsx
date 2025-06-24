import type { Meta, StoryObj } from '@storybook/react';

import { DescList } from './DescList';
import { DescListItem } from './DescListItem';

const meta = {
  title: 'CraftedUI/Components/DescList',
  component: DescList,
} satisfies Meta<typeof DescList>;

export default meta;
type Story = StoryObj<typeof DescList>;

export const Basic: Story = {
  args: {
    title: 'Applicant Information',
    subtitle: 'Personal details and application.',
  },
  render: (args) => (
    <DescList {...args}>
      <DescListItem label="Full name" value="Margot Foster" />
      <DescListItem label="Application for" value="Backend Developer" />
      <DescListItem label="Email address" value="margotfoster@example.com" />
      <DescListItem label="Salary expectation" value="$120,000" />
      <DescListItem 
        label="About" 
        span={2}
        value="Fugiat ipsum ipsum deserunt culpa qute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident."
      />
    </DescList>
  ),
};

export const ProductDetails: Story = {
  args: {
    title: 'Product Details',
    cols: 3,
  },
  render: (args) => (
    <DescList {...args}>
      <DescListItem label="Name" value="Hoppy IPA" />
      <DescListItem label="Category" value="India Pale Ale" className="md:col-span-6" />
      <DescListItem label="Type" value="Flagship" className="md:col-span-6" />
      <DescListItem label="Style" value="American IPA" className="md:col-span-6" />
      <DescListItem label="ABV" value="6.5%" className="md:col-span-3" />
      <DescListItem label="IBU" value="65" className="md:col-span-3" />
      <DescListItem label="Status">
        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </DescListItem>
      <DescListItem 
        label="Description" 
        span={3}
        value="A bold and hoppy India Pale Ale featuring citrus and pine notes from American hops. Perfect balance of malt sweetness and hop bitterness."
      />
    </DescList>
  ),
};
