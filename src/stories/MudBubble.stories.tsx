import type { Meta, StoryObj } from '@storybook/react'
import { MudBubble } from '../MudBubble'

const meta: Meta<typeof MudBubble> = {
  title: 'MudLabs/MudBubble',
  component: MudBubble,
  args: {
    children: 'Hello from MudLabs!',
    direction: 'left',
  },
}

export default meta
type Story = StoryObj<typeof MudBubble>

export const Left: Story = {
  args: { direction: 'left' },
}

export const Right: Story = {
  args: { direction: 'right' },
}
