import React from "react";

import * as S from "./styles";
import { GetCardsByPipe_cards_edges } from "../CardsModal/__generated__/GetCardsByPipe";

export type CardsProps = {
  cards?: (GetCardsByPipe_cards_edges | null) | null;
};

export const CardsList = ({ cards }: CardsProps) => {
  return (
    <S.Wrapper>
      <article>
        <S.Id>id: {cards?.node?.id}</S.Id>
        <S.Title aria-label={cards?.node?.title}>
          Title: {cards?.node?.title}
        </S.Title>
        {cards?.node?.url && (
          <S.Link href={cards?.node?.url} target="_blank" rel="noreferrer">
            Details
          </S.Link>
        )}
      </article>
    </S.Wrapper>
  );
};
