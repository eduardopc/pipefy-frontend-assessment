import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container className="App">
      <S.Content>
        <h1>Your Pipes</h1>
        <p>
          Here are all your processes{" "}
          <a target="_blank" href="https://help.pipefy.com/" rel="noreferrer">
            learn more.
          </a>
        </p>
      </S.Content>
    </S.Container>
  );
};
