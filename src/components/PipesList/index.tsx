import React from 'react'
import { LockAlt, Star, Book } from '@styled-icons/boxicons-regular'
import { Star as StarSolid } from '@styled-icons/boxicons-solid'
import { GetPipesByOrganization_organization_pipes } from '../Pipes/__generated__/GetPipesByOrganization'

import * as S from './styles'
import theme from '../../styles/theme'

export type PipesProps = {
  item?: (GetPipesByOrganization_organization_pipes | null) | null
  selectPipe: (_: string) => void
}

export const PipesList = ({ item, selectPipe }: PipesProps) => {
  return (
    <S.Wrapper
      color={item?.color ? item?.color : theme.colors.gray}
      onClick={() => (item?.cards_count ? selectPipe(item?.id) : null)}
    >
      <S.HeaderContent>
        <S.LockButton role="button">
          {item?.cards_count && item.cards_count % 2 ? (
            <LockAlt aria-label="Favorite Selected" />
          ) : null}
        </S.LockButton>
        <S.StarButton role="button">
          {item?.cards_count && item.cards_count % 2 ? (
            <StarSolid aria-label="Favorite Selected" />
          ) : (
            <Star aria-label="Favorite" />
          )}
        </S.StarButton>
      </S.HeaderContent>

      <S.Info hasCards={!!item?.cards_count}>
        <Book
          size={60}
          style={{ marginBottom: 10, alignSelf: 'center' }}
          color="#030517"
        />
        <S.Name>{item?.name}</S.Name>
        <S.Count>{item?.cards_count} cards</S.Count>
      </S.Info>
    </S.Wrapper>
  )
}
