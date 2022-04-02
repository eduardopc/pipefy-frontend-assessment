import React from "react";

import Base from "../Base";
import { Container } from "../Container";
import { Pipes } from "../Pipes";

export const Home = () => {
  return (
    <Base>
      <Container>
        <Pipes />
      </Container>

      {/* {test && <ComponentSkeleton />} */}
      {/* <button onClick={() => setTest(true)}>Abre modal</button>
      {test && (
        <S.ModalContainer>
          <S.Modal>
            <button onClick={() => setTest(false)}>Fecha modal</button>
          </S.Modal>
        </S.ModalContainer>
      )} */}
    </Base>
  );
};
