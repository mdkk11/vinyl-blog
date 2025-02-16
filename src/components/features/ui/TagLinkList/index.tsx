import NextLink from 'next/link'
import { ComponentProps } from 'react'

import { Tag } from '@/components/ui/Tag'
import { ROUTE } from '@/const/paths'
import { Post } from '@/models'

const TagLink = ({ children, ...props }: ComponentProps<typeof NextLink>) => {
  return (
    <NextLink {...props}>
      <Tag> {children}</Tag>
    </NextLink>
  )
}

export const TagLinkList = ({ tags }: Pick<Post, 'tags'>) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <TagLink href={ROUTE.tags.tagsPosts(tag)}>{tag}</TagLink>
        </li>
      ))}
    </ul>
  )
}
