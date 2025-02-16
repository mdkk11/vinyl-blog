import { StoryObj, Meta } from '@storybook/react'

import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'posts/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
