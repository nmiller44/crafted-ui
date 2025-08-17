import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { Section } from '../section/Section';
import { Button } from '../button/Button';

const meta = {
  title: 'CraftedUI/Layout/Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Page title="Basic Page" subtitle="Simple page with title and subtitle" {...args}>
      <Section title="Content Section">
        <div className="p-4 bg-muted rounded-md">
          <p>This is content within the page container.</p>
        </div>
      </Section>
    </Page>
  )
};

export const WithPageHeader: Story = {
  args: {},
  render: (args) => (
    <>
      <PageHeader title="Standalone Page Header" subtitle="Using PageHeader independently">
        <Button clr="primary">Action</Button>
      </PageHeader>
      <Page {...args}>
        <Section title="Page Content">
          <div className="p-4 bg-muted rounded-md">
            <p>Content below the standalone page header.</p>
          </div>
        </Section>
      </Page>
    </>
  )
};

export const Dashboard: Story = {
  args: {},
  render: (args) => (
    <Page title="Dashboard" subtitle="Overview of your account" {...args}>
      <Section title="Quick Stats">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-md text-center">
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </div>
          <div className="p-4 bg-muted rounded-md text-center">
            <div className="text-2xl font-bold">56</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </div>
          <div className="p-4 bg-muted rounded-md text-center">
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </Section>
      
      <Section title="Recent Activity">
        <div className="space-y-3">
          <div className="p-3 bg-muted rounded-md text-sm">User John Doe completed Project Alpha</div>
          <div className="p-3 bg-muted rounded-md text-sm">New team member added to Beta Team</div>
          <div className="p-3 bg-muted rounded-md text-sm">Project Gamma reached 75% completion</div>
        </div>
      </Section>
    </Page>
  )
};

export const SettingsPage: Story = {
  args: {},
  render: (args) => (
    <>
      <PageHeader title="User Settings" subtitle="Manage your account preferences">
        <Button clr="primary">Save Changes</Button>
      </PageHeader>
      
      <Page {...args}>
        <Section title="Profile Information">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-border rounded-md bg-background" 
                  defaultValue="John" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-border rounded-md bg-background" 
                  defaultValue="Doe" 
                />
              </div>
            </div>
          </div>
        </Section>
        
        <Section title="Preferences">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notifications" className="rounded" />
              <label htmlFor="notifications" className="text-sm">Enable email notifications</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="marketing" className="rounded" />
              <label htmlFor="marketing" className="text-sm">Receive marketing updates</label>
            </div>
          </div>
        </Section>
      </Page>
    </>
  )
};

export const HeaderVariants: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8">
      <PageHeader title="Basic Header" subtitle="Simple title and subtitle" />
      
      <PageHeader title="Header with Single Action">
        <Button>Action</Button>
      </PageHeader>
      
      <PageHeader title="Header with Multiple Actions" subtitle="Multiple buttons in header">
        <div className="flex gap-2">
          <Button>Edit</Button>
          <Button clr="primary">Save</Button>
        </div>
      </PageHeader>
      
      <PageHeader title="Custom Styled Header" 
                  subtitle="With custom wrapper styling"
                  wrapperClassName="bg-muted/50 p-6 rounded-lg border border-border">
        <Button clr="accent">Special Action</Button>
      </PageHeader>
    </div>
  )
};

export const ContainerDemo: Story = {
  args: {},
  render: (args) => (
    <div className="bg-background min-h-screen">
      <Page title="Container Behavior" subtitle="Demonstrates responsive container sizing" {...args}>
        <Section title="Container Content">
          <div className="p-4 bg-primary/10 rounded-md border border-border">
            <p>This content is constrained by the container's max-width and has responsive padding.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Resize your browser to see how the container adapts to different screen sizes.
            </p>
          </div>
        </Section>
        
        <Section title="Spacing Demonstration">
          <div className="p-4 bg-secondary/10 rounded-md">
            <p>First content block</p>
          </div>
          <div className="p-4 bg-accent/10 rounded-md">
            <p>Second content block - automatically spaced with space-y-12</p>
          </div>
        </Section>
      </Page>
    </div>
  )
};
