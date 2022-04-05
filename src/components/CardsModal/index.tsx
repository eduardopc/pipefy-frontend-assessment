import React from 'react'
import { CardsList } from '../CardsList'

import { Loading } from '../Loading'
import useCards from './hooks/useCards'

import * as S from './styles'

type TCardsModal = {
  closeModal: () => void
  pipeId: string | null
}

export const CardsModal = ({ closeModal, pipeId }: TCardsModal) => {
  const { data, error, loading, fetchMore } = useCards({
    pipeId: pipeId || ''
  })

  return (
    <>
      <S.ModalBg>
        <S.ModalContainer>
          <S.CloseButtonContainer>
            <S.CloseButton onClick={closeModal}>x</S.CloseButton>
          </S.CloseButtonContainer>
          <S.Body>
            {error && <p>${JSON.stringify(error.message)}</p>}
            {loading && <Loading withTitle />}
            {!loading && data && (
              <section>
                <S.Grid>
                  {data.cards?.edges?.map((card) => (
                    <CardsList key={card?.node?.id} cards={card} />
                  ))}
                </S.Grid>
              </section>
            )}
          </S.Body>
          <S.Footer>
            <S.FooterButton
              buttonEnabled={data?.cards?.pageInfo.hasNextPage}
              onClick={() =>
                data?.cards?.pageInfo.hasNextPage
                  ? fetchMore({
                      variables: {
                        after: data?.cards?.pageInfo.endCursor
                      }
                    })
                  : null
              }
            >
              {data?.cards?.pageInfo.hasNextPage
                ? 'Load more cards'
                : 'No more cards'}
            </S.FooterButton>
          </S.Footer>
        </S.ModalContainer>
      </S.ModalBg>
    </>
  )
}
