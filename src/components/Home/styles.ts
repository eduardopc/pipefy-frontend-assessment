import styled, { css } from "styled-components";

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border: 1px solid #000;
    padding: 20px;
    min-height: 200px;
  `}
`;
