import { StoryObj, Meta } from '@storybook/react'

import { Domain } from '.'

const meta: Meta<typeof Domain> = {
  title: 'posts/Domain',
  component: Domain,
  args: {
    children: 'zenn',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Domain>

export const Default: Story = {}
