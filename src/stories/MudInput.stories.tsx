import type { Meta, StoryObj } from '@storybook/react'
import { MudInput } from '../MudInput'

const meta: Meta<typeof MudInput> = {
  title: 'MudLabs/MudInput',
  component: MudInput,
  args: {
    placeholder: 'Type something...',
  },
}

export default meta
type Story = StoryObj<typeof MudInput>

export const Default: Story = {}

export const WithValue: Story = {
  args: { value: 'Hello MudLabs', readOnly: true },
}
