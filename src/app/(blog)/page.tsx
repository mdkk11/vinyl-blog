import * as React from 'react'

import { Posts } from '@/components/features/blog/BookPosts'
import { HeaderWithLink } from '@/components/features/blog/Header'
import { DATABASE_ID } from '@/lib/notion'
import { fetchAllData } from '@/services/notion/fetcher'
import { createdAtSorts, publishedFilter } from '@/services/notion/property'
import { extractPageProperties } from '@/services/notion/utils'

export default async function TopPage() {
  const data = await fetchAllData({
    database_id: DATABASE_ID,
    filter: publishedFilter,
    sorts: [createdAtSorts],
    limit: 4,
  })
  const posts = data.map(extractPageProperties)

  return (
    <section aria-label="記事一覧" className="space-y-12 py-8">
      <HeaderWithLink title="Current" />
      <Posts posts={posts} />
    </section>
  )
}
