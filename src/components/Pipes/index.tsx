import React, { PropsWithChildren } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePipes from "./hooks/usePipes";

import { Cards } from "../Cards";

import * as S from "./styles";

export interface IPipe {
  cards_count: number;
  color: string;
  icon: string;
  id: number;
  name: string;
}

export const Pipes = () => {
  const { data, error, loading } = usePipes({
    organizationId: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID || "",
  });

  function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
    return <span style={{ marginRight: "1rem" }}>{children}</span>;
  }

  return (
    <div>
      {error && (
        <p>
          {JSON.stringify(error.message) ||
            "Check if was set up properly the env REACT_APP_PIPEFY_ORGANIZATION_ID"}
        </p>
      )}
      {loading ? (
        <Skeleton
          count={24}
          wrapper={InlineWrapperWithMargin}
          inline
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
          }}
        />
      ) : (
        <section>
          <S.Grid>
            {data?.map((item) => (
              <Cards key={item?.id} item={item} />
            ))}
          </S.Grid>
        </section>
      )}
    </div>
  );
};
