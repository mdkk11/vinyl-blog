'use client'

import { usePathname } from 'next/navigation'
import * as React from 'react'

import { NavLink } from '@/components/Layouts/NavLink'
import { ThemeToggleButton } from '@/components/ThemeToggleButton'
import { Path } from '@/types'
import { isCurrent } from '@/utils'

export const Nav = ({ paths }: { paths: readonly Path[] }) => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-5">
        {paths.map((path) => (
          <li key={path.title}>
            <NavLink
              href={path.href}
              current={!!isCurrent(pathname === path.href)}
              {...isCurrent(pathname === path.href)}
            >
              {path.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="ml-20">
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
