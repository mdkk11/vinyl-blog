import { TagLinkList } from '@/components/features/ui/TagLinkList'
import { HeadGroup } from '@/components/ui/HeadGroup'
import { DATABASE_ID } from '@/lib/notion'
import { fetchAvailableTags } from '@/services/notion/fetcher'

export default async function TagsPage() {
  const tags = await fetchAvailableTags(DATABASE_ID)

  return (
    <section aria-label="タグ一覧" className="space-y-12 py-8">
      <HeadGroup title="Tags" variant="h1" as="h2" />
      <TagLinkList tags={tags} />
    </section>
  )
}
