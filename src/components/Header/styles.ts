import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: 1rem auto;
    max-height: ${theme.font.sizes.xlarge};
    color: ${theme.colors.black};
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`;
