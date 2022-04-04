import styled, { css, keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h1`
  margin-right: 5px;
`;

type TDotProps = {
  delay: string;
};

export const Dot = styled.div<TDotProps>`
  ${({ theme, delay }) => css`
    background-color: ${theme.colors.black};
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin: 0 5px;
    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${delay};
  `}
`;
