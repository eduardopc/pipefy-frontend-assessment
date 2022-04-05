import { Container } from '../Container'
import { Header } from '../Header'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Header />
      </Container>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
