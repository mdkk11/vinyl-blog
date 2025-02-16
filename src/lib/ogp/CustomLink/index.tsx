import Link from 'next/link'
import * as React from 'react'

import { OGPCard } from '@/components/ui/OgpCard'

export const CustomLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  const isExternal = !!href.startsWith('/')

  return isExternal ? (
    <Link href={href}>{children}</Link>
  ) : (
    <OGPCard url={href} />
  )
}
