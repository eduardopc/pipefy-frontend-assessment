import styled, { css } from 'styled-components'

type WrapperProps = {
  color?: string | null
}

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, color }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: ${color};
    opacity: 0.8;
    border-radius: ${theme.border.radius};
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    margin: ${theme.spacings.xsmall};
  `}
`

export const StarButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    svg {
      width: 2rem;
    }
  `}
`

export const LockButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    svg {
      width: 2rem;
    }
  `}
`

type InfoProps = {
  hasCards?: boolean
}

export const Info = styled.div<InfoProps>`
  ${({ hasCards }) => css`
    align-self: center;
    text-align: center;
    cursor: ${hasCards ? 'pointer' : 'not-allowed'};
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
    padding: 0 ${theme.spacings.xsmall};
  `}
`

export const Count = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
