import React from "react";

import { Loading } from "../Loading";
import useCards from "./hooks/useCards";

import * as S from "./styles";

type TCardsModal = {
  closeModal: () => void;
  pipeId: string | null;
};

export const CardsModal = ({ closeModal, pipeId }: TCardsModal) => {
  const { data, error, loading } = useCards({
    pipeId: pipeId || "",
  });

  return (
    <>
      <S.ModalBg>
        <S.ModalContainer>
          <S.CloseButtonContainer>
            <S.CloseButton onClick={closeModal}>X</S.CloseButton>
          </S.CloseButtonContainer>
          <S.Body>
            {loading && <Loading withTitle />}
            {!loading && data && JSON.stringify(data)}
          </S.Body>
          <S.Footer>
            <S.FooterButton>Continue</S.FooterButton>
          </S.Footer>
        </S.ModalContainer>
      </S.ModalBg>
    </>
  );
};
