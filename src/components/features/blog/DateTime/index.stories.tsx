import { StoryObj, Meta } from '@storybook/react'

import { DateTime } from '.'

const meta: Meta<typeof DateTime> = {
  title: 'posts/DateTime',
  component: DateTime,
  args: {
    date: new Date(),
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DateTime>

export const Default: Story = {}
