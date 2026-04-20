import type { Preview } from '@storybook/react'
import 'pixel-retroui/dist/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'mud',
      values: [
        { name: 'mud', value: '#e5eefc' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#332b23' },
      ],
    },
  },
}

export default preview
