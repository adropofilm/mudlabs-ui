import type { Meta, StoryObj } from '@storybook/react'
import { MudButton } from '../MudButton'

const meta: Meta<typeof MudButton> = {
  title: 'MudLabs/MudButton',
  component: MudButton,
  args: {
    children: 'Click me',
  },
}

export default meta
type Story = StoryObj<typeof MudButton>

export const Primary: Story = {
  args: { variant: 'primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Danger: Story = {
  args: { variant: 'danger' },
}
