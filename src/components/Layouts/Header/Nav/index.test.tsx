import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Nav } from '.'

const Paths = [{ href: '/', title: 'Home' }] as const

test('role=["navigation"]', () => {
  render(<Nav paths={Paths} />)
  expect(screen.getByRole('navigation')).toBeInTheDocument()
})
