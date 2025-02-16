import { Metadata } from 'next'

import { AnchorButton } from '@/components/ui/AnchorButton'
import { Typography } from '@/components/ui/Typography'
import { ROUTE } from '@/const/paths'

export const metadata = {
  robots: 'noindex',
  title: 'Not Found',
  description: '指定されたページが見つかりませんでした',
  openGraph: {
    type: 'website',
    title: 'Not Found',
    description: '指定されたページが見つかりませんでした',
  },
} satisfies Metadata

export default function NotFound() {
  return (
    <section className="mt-32 h-full text-center">
      <div className="mx-auto grid w-96 items-center gap-12">
        <h1>
          <Typography as="span">404</Typography>
          <Typography as="p" variant="p">
            お探しのページは見つかりませんでした。削除、変更されたか URL
            が間違っている可能性がございます。
          </Typography>
        </h1>
        <AnchorButton className="mx-auto w-40" href={ROUTE.home()}>
          ホームに戻る
        </AnchorButton>
      </div>
    </section>
  )
}
