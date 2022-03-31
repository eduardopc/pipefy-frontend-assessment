import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import * as S from "./styles";

export const Home = () => {
  const [test, setTest] = useState(false);
  //   const { data, loading, error } = useQuery(gql`
  //     query me {
  //       me {
  //         email
  //       }
  //     }
  //   `);

  return (
    <>
      <button onClick={() => setTest(true)}>Abre modal</button>
      {test && (
        <S.ModalContainer>
          <S.Modal>
            <button onClick={() => setTest(false)}>Fecha modal</button>
          </S.Modal>
        </S.ModalContainer>
      )}
    </>
  );
};
