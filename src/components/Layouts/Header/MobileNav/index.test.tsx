import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { MobileNav } from '.'

const paths = [{ href: '/', title: 'Home' }]

test('role=["navigation"]', () => {
  render(<MobileNav paths={paths} />)
  expect(screen.getByRole('navigation')).toBeInTheDocument()
})
