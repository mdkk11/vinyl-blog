import React from 'react'

import { Book } from '@/components/features/blog/Book'
import { DateTime } from '@/components/features/blog/DateTime'
import { Domain } from '@/components/features/blog/Domain'
import { Typography } from '@/components/ui/Typography'
import { Post as PostType } from '@/models'

export const Post = ({
  ...props
}: Pick<PostType, 'title' | 'domain' | 'createdAt'> &
  React.ComponentPropsWithoutRef<typeof Book>) => {
  return (
    <Book>
      <Typography aria-labelledby={props.title} as="h2" variant="h4">
        {props.title}
      </Typography>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <Domain>{props.domain}</Domain>
          <DateTime className="text-xs" date={new Date(props.createdAt)} />
        </div>
      </div>
    </Book>
  )
}
