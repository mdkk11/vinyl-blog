import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Header } from '.'

test('role=["banner"]', () => {
  render(<Header />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})
