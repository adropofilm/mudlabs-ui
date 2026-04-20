import type { Meta, StoryObj } from '@storybook/react'
import { MudPopup } from '../MudPopup'

const meta: Meta<typeof MudPopup> = {
  title: 'MudLabs/MudPopup',
  component: MudPopup,
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'MudLabs Popup',
    children: 'This is a popup built with MudLabs tokens.',
  },
}

export default meta
type Story = StoryObj<typeof MudPopup>

export const Default: Story = {}

export const Closed: Story = {
  args: { isOpen: false },
}
