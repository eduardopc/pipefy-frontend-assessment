import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const StarButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    svg {
      width: 2rem;
    }
  `}
`;

export const LockButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    svg {
      width: 2rem;
    }
  `}
`;

export const Info = styled.div`
  align-self: center;
  text-align: center;
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

export const Count = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`;
