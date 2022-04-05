import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import { PipesList } from '.'

const props = {
  id: '1',
  cards_count: 3,
  color: 'red',
  name: 'Pipefy',
  public: true
}

describe('<PipesList />', () => {
  const showCards = jest.fn()

  it('should render correctly', () => {
    renderWithTheme(<PipesList item={props} selectPipe={showCards} />)

    expect(screen.getByRole('heading', { name: /pipefy/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /3 cards/ })).toBeInTheDocument()

    expect(screen.getAllByLabelText(/favorite selected/i)).toHaveLength(2)
  })

  it('should render article with the specified color', () => {
    renderWithTheme(<PipesList item={props} selectPipe={showCards} />)

    const article = screen.getByRole('article')

    expect(article).toHaveStyle({ backgroundColor: props.color })
  })

  it('should call method when article is clicked', () => {
    renderWithTheme(<PipesList item={props} selectPipe={showCards} />)

    fireEvent.click(screen.getByRole('article'))

    expect(showCards).toHaveBeenCalled()
    expect(showCards).toHaveBeenCalledWith(props.id)
  })
})
