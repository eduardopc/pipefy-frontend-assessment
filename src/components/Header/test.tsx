import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import { Header } from '.'

describe('<Header />', () => {
  it('should render loading component with title', () => {
    renderWithTheme(<Header />)

    expect(
      screen.getByRole('heading', { name: /your pipes/i })
    ).toBeInTheDocument()
  })
})
