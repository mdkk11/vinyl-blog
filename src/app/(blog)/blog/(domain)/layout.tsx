import { Nav } from '@/components/features/blog/Nav'
import { HeadGroup } from '@/components/ui/HeadGroup'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section aria-label="記事一覧" className="space-y-16 py-8">
      <HeadGroup title="Posts" as="h2" variant="h1" />
      <Nav />
      {children}
    </section>
  )
}
