import * as React from 'react'

import { DateTime } from '@/components/features/blog/DateTime'
import { TagLinkList } from '@/components/features/ui/TagLinkList'
import { Typography } from '@/components/ui/Typography'
import { Post } from '@/models'

import { Toc } from '../Toc'

type Props = Post & { children: React.ReactNode }
export const Body = ({ ...props }: Props) => {
  return (
    <div className="grid w-full gap-16">
      <div className="grid w-full lg:grid-cols-[1fr_280px] lg:items-start lg:gap-6 xl:gap-20">
        <div className="grid w-full gap-10">
          <Typography as="h1" variant="h2">
            {props.title}
          </Typography>
          <DateTime
            className="mt-4 flex justify-start text-xs"
            date={new Date(props.createdAt)}
          />
          <TagLinkList tags={props.tags} />
          <div className="content prose w-full space-y-4 overflow-hidden dark:prose-invert prose-img:m-0">
            {props.children}
          </div>
        </div>

        <div className="sticky top-4 hidden w-full lg:block">
          <Toc />
        </div>
      </div>
    </div>
  )
}
