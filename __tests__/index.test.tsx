import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByTestId('custom-element')

    expect(heading).toBeInTheDocument()
  })
})
