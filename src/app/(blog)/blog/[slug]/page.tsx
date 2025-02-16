import { Metadata } from 'next'

import { Body } from '@/components/features/blog/Body'
import { Link } from '@/components/ui/Link'
import { ROUTE } from '@/const/paths'
import { DATABASE_ID } from '@/lib/notion'
import { markdownToHtml } from '@/lib/unified'
import {
  fetchAllData,
  fetchNotionPageMarkdown,
  fetchPageMetadata,
} from '@/services/notion/fetcher'
import { extractPageProperties } from '@/services/notion/utils'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug

  const data = await fetchPageMetadata(slug)
  const post = extractPageProperties(data)

  return {
    title: post.title,
    description: post.summary,
  }
}

export async function generateStaticParams() {
  const posts = await fetchAllData({ database_id: DATABASE_ID })

  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug
  const data = await fetchPageMetadata(slug)
  const post = extractPageProperties(data)
  const markdown = await fetchNotionPageMarkdown(slug)
  const children = await markdownToHtml(markdown.parent)

  const props = { children, ...post }

  return (
    <article className="grid gap-10 py-12 lg:gap-32" aria-label="記事詳細">
      <Body {...props} />
      <div className="border-t py-4 md:py-20">
        <Link href={ROUTE.blog.allPosts()}>記事一覧に戻る</Link>
      </div>
    </article>
  )
}
