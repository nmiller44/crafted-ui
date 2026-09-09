import type { Meta, StoryObj } from '@storybook/react-vite';

import { Vertlist } from './Vertlist';
import { VertlistHeader } from './VertlistHeader';
import { VertlistItem } from './VertlistItem';
import { Heading4 } from '../heading/Heading4';
import { Avatar } from '../avatar/Avatar';
import { Badge } from '../badge/Badge';
import { IconBeer } from '../icons/IconBeer';
import { IconBuilding } from '../icons/IconBuilding';
import { IconCalendar } from '../icons/IconCalendar';
import { IconDownload } from '../icons/IconDownload';
import { IconLocation } from '../icons/IconLocation';
import { IconSearch } from '../icons/IconSearch';
import { IconShare } from '../icons/IconShare';

const meta = {
  title: 'CraftedUI/Components/Vertlist',
  component: Vertlist,
} satisfies Meta<typeof Vertlist>;

export default meta;
type Story = StoryObj<typeof Vertlist>;

const HelmetLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z" />
  </svg>
);

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex min-h-[40rem] items-stretch bg-muted/30">
      <aside className="flex w-sidebar shrink-0 flex-col border-r border-border bg-background p-3">
        <a href="#" className="mb-6 flex items-center gap-2 px-2 py-1.5 text-primary">
          <HelmetLogo className="h-7 w-10 shrink-0" />
          <span className="text-base font-semibold text-foreground">Helmet</span>
        </a>

        <div className="flex grow flex-col space-y-6">
          <Vertlist {...args} className="group bg-background">
            <VertlistItem>
              <a href="#" className="active flex items-center gap-2">
                <IconBuilding className="size-4 shrink-0" aria-hidden="true" />
                Dashboard
              </a>
            </VertlistItem>
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <IconBeer className="size-4 shrink-0" aria-hidden="true" />
                Brews
                <Badge clr="primary" pill className="ml-auto">12</Badge>
              </a>
            </VertlistItem>
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <IconCalendar className="size-4 shrink-0" aria-hidden="true" />
                Schedule
              </a>
            </VertlistItem>
          </Vertlist>

          <Vertlist className="group bg-background">
            <VertlistHeader>Distribution</VertlistHeader>
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <IconLocation className="size-4 shrink-0" aria-hidden="true" />
                Taprooms
              </a>
            </VertlistItem>
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <IconShare className="size-4 shrink-0" aria-hidden="true" />
                Accounts
                <Badge clr="warning" pill className="ml-auto">3</Badge>
              </a>
            </VertlistItem>
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <IconDownload className="size-4 shrink-0" aria-hidden="true" />
                Reports
              </a>
            </VertlistItem>
          </Vertlist>

          <Vertlist className="group bg-background">
            <VertlistHeader>Workspace</VertlistHeader>
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <IconSearch className="size-4 shrink-0" aria-hidden="true" />
                Search
              </a>
            </VertlistItem>
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <IconBuilding className="size-4 shrink-0" aria-hidden="true" />
                Settings
              </a>
            </VertlistItem>
          </Vertlist>
        </div>

        <div className="mt-6 border-t border-border pt-3">
          <Vertlist className="group bg-background">
            <VertlistItem>
              <a href="#" className="flex items-center gap-2">
                <Avatar size="sm" fallback="RH" className="size-7 shrink-0 text-xs" />
                <span className="flex flex-col leading-tight">
                  <span className="font-medium">Ramona Hops</span>
                  <span className="text-xs text-muted-foreground">Head Brewer</span>
                </span>
              </a>
            </VertlistItem>
          </Vertlist>
        </div>
      </aside>

      <main className="grow p-8">
        <Heading4 title="Dashboard" />
        <p className="mt-2 text-sm text-muted-foreground">
          The sidebar is built entirely from Vertlist, VertlistHeader, and VertlistItem.
        </p>
      </main>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex space-x-8">
      <Vertlist {...args} className="w-sidebar">
        <VertlistHeader>Header</VertlistHeader>
        <VertlistItem><a href="#">Link 1</a></VertlistItem>
        <VertlistItem><a href="#" className="active">Link 2</a></VertlistItem>
        <VertlistItem>Item 3</VertlistItem>
        <VertlistItem><a href="#">Link 4</a></VertlistItem>
      </Vertlist>

      <Vertlist className="w-sidebar group bg-background">
        <VertlistHeader>Header</VertlistHeader>
        <VertlistItem><a href="#">Link 1</a></VertlistItem>
        <VertlistItem><a href="#" className="active">Link 2</a></VertlistItem>
        <VertlistItem>Item 3</VertlistItem>
        <VertlistItem><a href="#">Link 4</a></VertlistItem>
      </Vertlist>
    </div>
  )
};

export const StretchedLinks: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<Vertlist>
  <VertlistHeader>
    <a href="/overview">Getting Started</a>
  </VertlistHeader>
  <VertlistItem>
    <a href="/installation">Installation</a>
  </VertlistItem>
  <VertlistItem>
    <a href="/usage" className="active">Usage</a>
  </VertlistItem>
  <VertlistItem>
    <a href="/examples">Examples</a>
  </VertlistItem>
</Vertlist>`,
      },
    },
  },
  render: (args) => (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm text-muted-foreground">
        VertlistItem and VertlistHeader support stretched links: a single <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">&lt;a&gt;</code> child
        makes the entire item clickable. Add the <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">active</code> class
        to mark the current page. Use only one link per item.
      </p>

      <Vertlist {...args} className="w-sidebar">
        <VertlistHeader>
          <a href="#">Getting Started</a>
        </VertlistHeader>
        <VertlistItem><a href="#">Installation</a></VertlistItem>
        <VertlistItem><a href="#" className="active">Usage</a></VertlistItem>
        <VertlistItem><a href="#">Examples</a></VertlistItem>
      </Vertlist>
    </div>
  )
};
