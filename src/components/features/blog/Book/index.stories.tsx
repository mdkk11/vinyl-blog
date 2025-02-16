import { StoryObj, Meta } from '@storybook/react'

import { Typography } from '@/components/ui/Typography'

import { Book } from '.'
import { DateTime } from '../DateTime'
import { Domain } from '../Domain'

const meta: Meta<typeof Book> = {
  title: 'posts/Book',
  component: Book,
  args: {
    children: (
      <>
        <Typography as="h2" variant="h4">
          テスト
        </Typography>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <Domain>Zenn</Domain>
            <DateTime className="text-xs" date={new Date('2022-09-09')} />
          </div>
        </div>
      </>
    ),
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Book>

export const Default: Story = {}
