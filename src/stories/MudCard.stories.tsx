import type { Meta, StoryObj } from '@storybook/react'
import { MudCard } from '../MudCard'

const meta: Meta<typeof MudCard> = {
  title: 'MudLabs/MudCard',
  component: MudCard,
  args: {
    children: 'Card content goes here.',
  },
}

export default meta
type Story = StoryObj<typeof MudCard>

export const Default: Story = {}

export const CustomBackground: Story = {
  args: { bg: '#e5eefc' },
}
