import React from "react";

import { Loading } from "../Loading";
import useCards from "./hooks/useCards";

import * as S from "./styles";

type TCardsModal = {
  closeModal: () => void;
  pipeId: string | null;
};

export const CardsModal = ({ closeModal, pipeId }: TCardsModal) => {
  const { data, error, loading, fetchMore } = useCards({
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
            {!loading && data && (
              <>
                {data.cards?.edges?.map((card) => {
                  return (
                    <>
                      <p>{card?.node?.title} / </p>
                    </>
                  );
                })}
              </>
            )}
          </S.Body>
          <S.Footer>
            <S.FooterButton
              buttonEnabled={data?.cards?.pageInfo.hasNextPage}
              onClick={async () =>
                await fetchMore({
                  variables: {
                    after: data?.cards?.pageInfo.endCursor,
                  },
                })
              }
            >
              {data?.cards?.pageInfo.hasNextPage
                ? "Load more cards"
                : "No more cards"}
            </S.FooterButton>
          </S.Footer>
        </S.ModalContainer>
      </S.ModalBg>
    </>
  );
};
