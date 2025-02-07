import type { Meta, StoryObj } from '@storybook/react'

import { DefaultLayout } from '.'

const meta: Meta<typeof DefaultLayout> = {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayout,
}

export default meta
type Story = StoryObj<typeof DefaultLayout>

export const Default: Story = {
  args: {
    children: '',
  },
}
