import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalDescription } from './ModalDescription';
import { ModalTitle } from './ModalTitle';
import { ModalTrigger } from './ModalTrigger';

import { Avatar } from '../avatar/Avatar';

const meta = {
  title: 'CraftedUI/Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex space-x-8">
        <Modal {...args}>
            <ModalTrigger>
                <Avatar fallback="MU"></Avatar>
            </ModalTrigger>
            <ModalContent title="Package Product" subtitle="From Product Batch in VS1">
                <ModalDescription className="text-sm text-muted-foreground">
                    This is a description of the modal. It can be used to provide additional information or context about the content of the modal.
                </ModalDescription>
            </ModalContent>
        </Modal>
    </div>
  )
};
