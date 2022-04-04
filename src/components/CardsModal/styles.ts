import styled, { css } from "styled-components";

export const ModalBg = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-top: 100px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    width: 500px;
    height: 500px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
  `}
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export const Body = styled.div`
  ${({ theme, color }) => css`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
  `}
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const FooterButton = styled.button`
  ${({ theme }) => css`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: ${theme.colors.gray};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.large};
    cursor: pointer;
  `}
`;
