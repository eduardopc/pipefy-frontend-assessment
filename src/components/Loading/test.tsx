import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import { Loading } from '.'

describe('<Loading />', () => {
  it('should not render loading component with title', () => {
    renderWithTheme(<Loading />)

    expect(
      screen.queryByRole('heading', { name: /carregando/i })
    ).not.toBeInTheDocument()
  })

  it('should render loading component with title', () => {
    renderWithTheme(<Loading withTitle/>)

    expect(screen.getByRole('heading', { name: /carregando/i })).toBeInTheDocument()
  })
})
