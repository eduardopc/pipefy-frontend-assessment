import styled, { css } from "styled-components";

export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    width: 400px;
    height: 600px;
    overflow-y: auto;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`;

export const CloseButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export const Body = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

type TFooterButton = {
  buttonEnabled: boolean | undefined;
};

export const FooterButton = styled.button<TFooterButton>`
  ${({ theme, buttonEnabled }) => css`
    width: 150px;
    height: 45px;
    margin-top: 10px;
    border: none;
    background-color: ${buttonEnabled
      ? theme.colors.secondary
      : theme.colors.gray};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    cursor: ${buttonEnabled ? "pointer" : "not-allowed"};
  `}
`;
