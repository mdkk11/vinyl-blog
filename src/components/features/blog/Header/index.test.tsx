import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Header } from '.'

test('role=["banner"]', () => {
  render(<Header title="All Posts" />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})
