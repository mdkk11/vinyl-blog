import { StoryObj, Meta } from '@storybook/react'

import { Typography } from '@/components/ui/Typography'

import Card from '.'
import { DateTime } from '../DateTime'
import { Domain } from '../Domain'

const meta: Meta<typeof Card> = {
  title: 'posts/Card',
  component: Card,
  args: {
    children: (
      <Card>
        <Card.CardContent className="justify-between">
          <Typography as="h3" variant="h4">
            テスト
          </Typography>
          <div className="grid gap-4">
            <div className="flex justify-between">
              <Domain>vinyl.com</Domain>
              <DateTime className="text-xs" date={new Date('2022-09-09')} />
            </div>
          </div>
        </Card.CardContent>
      </Card>
    ),
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {}
