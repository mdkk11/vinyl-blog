import { AnchorButton } from '@/components/ui/AnchorButton'
import { HeadGroup } from '@/components/ui/HeadGroup'
import { ROUTE } from '@/const/paths'

type Props = {
  children: React.ReactNode
  params: Promise<{ tag?: string }>
}

export default async function Layout({ children, params }: Props) {
  const data = await params
  const tag = data.tag ?? ''

  return (
    <section aria-label={`${tag}の記事一覧`} className="space-y-16 py-8">
      <HeadGroup title={`${tag} の記事一覧`} as="h1" variant="h1">
        <AnchorButton href={ROUTE.blog.allPosts()}>All POSTS</AnchorButton>
      </HeadGroup>
      {children}
    </section>
  )
}
