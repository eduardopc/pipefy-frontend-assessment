import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import { CardsList } from '.'

const props = {
  node: {
    id: '1',
    title: 'pipefy',
    url: 'http://www.pipefy.com'
  }
}

describe('<CardsList />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CardsList cards={props} />)

    expect(screen.getByRole('heading', { name: /pipefy/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Details' })).toBeInTheDocument()
  })
})
