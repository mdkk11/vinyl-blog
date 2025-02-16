import { Posts } from '@/components/features/blog/CardPosts'
import { Pagination } from '@/components/ui/Pagination'
import { ROUTE } from '@/const/paths'
import { DATABASE_ID } from '@/lib/notion'
import { fetchPaginatedPosts } from '@/services/notion/fetcher'
import {
  createdAtSorts,
  domainFilter,
  publishedFilter,
} from '@/services/notion/property'
import { extractPageProperties } from '@/services/notion/utils'

const limitPerPage = 6

export default async function VinylDomainPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const currentPage = Math.max(1, parseInt(params.page ?? '1', 10))

  const { posts: data, totalCount } = await fetchPaginatedPosts({
    database_id: DATABASE_ID,
    filter: {
      and: [publishedFilter, domainFilter('vinyl')],
    },
    sorts: [createdAtSorts],
    page: currentPage,
    limit: limitPerPage,
  })

  const posts = data.map(extractPageProperties)

  return (
    <>
      <Posts posts={posts} />
      <Pagination
        totalCount={totalCount}
        perPage={limitPerPage}
        current={currentPage}
        basePath={ROUTE.blog.vinylPosts()}
      />
    </>
  )
}
