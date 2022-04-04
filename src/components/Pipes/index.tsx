import React, { PropsWithChildren, useCallback, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePipes from "./hooks/usePipes";

import { PipesList } from "../PipesList";

import * as S from "./styles";
import { CardsModal } from "../CardsModal";

export interface IPipe {
  cards_count: number;
  color: string;
  icon: string;
  id: number;
  name: string;
}

export const Pipes = () => {
  const [pipeId, setPipeId] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const { data, error, loading } = usePipes({
    organizationId: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID || "",
  });

  const handleClickPipe = useCallback(
    (pipe: string) => {
      setPipeId(pipe);
      setOpenModal(true);
    },
    [setPipeId, setOpenModal]
  );

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
    return <span style={{ marginRight: "1rem" }}>{children}</span>;
  }

  return (
    <div>
      {openModal ? (
        <CardsModal closeModal={handleCloseModal} pipeId={pipeId} />
      ) : (
        <>
          {error && (
            <p>
              {`Check if was set up properly the env REACT_APP_PIPEFY_ORGANIZATION_ID - GraphQL error: ${JSON.stringify(
                error.message
              )}`}
            </p>
          )}
          {loading ? (
            <Skeleton
              count={24}
              wrapper={InlineWrapperWithMargin}
              inline
              style={{
                width: 270,
                height: 185,
                borderRadius: 8,
                marginTop: 20,
              }}
            />
          ) : (
            <section>
              <S.Grid>
                {data?.map((item) => (
                  <PipesList
                    key={item?.id}
                    item={item}
                    selectPipe={handleClickPipe}
                  />
                ))}
              </S.Grid>
            </section>
          )}
        </>
      )}
    </div>
  );
};
