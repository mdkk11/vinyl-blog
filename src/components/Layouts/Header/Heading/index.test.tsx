import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Heading } from '.'

test('role=["heading"]', () => {
  render(<Heading />)
  expect(screen.getByRole('heading')).toBeInTheDocument()
})

test('role=["link"]', () => {
  render(<Heading />)
  expect(screen.getByRole('link')).toBeInTheDocument()
})
