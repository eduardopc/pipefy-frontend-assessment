import React from 'react'

import * as S from './styles'

type TLoadingProps = {
  withTitle?: boolean
}

export const Loading = ({ withTitle }: TLoadingProps) => {
  return (
    <S.DotWrapper>
      {withTitle && <S.Title>Carregando</S.Title>}
      <S.Dot delay="0s" />
      <S.Dot delay=".1s" />
      <S.Dot delay=".2s" />
    </S.DotWrapper>
  )
}
