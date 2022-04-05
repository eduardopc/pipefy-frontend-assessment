import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    background-color: ${theme.colors.gray};
    opacity: 0.8;
    border-radius: ${theme.border.radius};
  `}
`

export const Title = styled.h2`
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

export const Id = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`
