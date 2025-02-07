import * as React from 'react'

import { HeaderNavPaths } from '@/const/paths'

import { Heading } from './Heading'
import { MobileNav } from './MobileNav'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header className="grid h-14 border-b px-4 md:h-20">
      <div className="mx-auto flex w-full items-center justify-between lg:max-w-7xl">
        <Heading />
        <div>
          <MobileNav paths={HeaderNavPaths} />
          <Nav paths={HeaderNavPaths} />
        </div>
      </div>
    </header>
  )
}
