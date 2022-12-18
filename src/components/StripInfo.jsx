import React, { useContext } from "react";
import CardContext from "../context/CardContext";
import Button from "./Button";
import { Container, Wrapper } from "../styles/StripInfo";

const StripInfo = () => {
  const cardContext = useContext(CardContext);
  const { score, tries, handleNewGame } = cardContext;
  return (
    <Container>
      <Wrapper>
        <h3>Score : {score}</h3>
        <h3>Tries : {tries}</h3>
      </Wrapper>
      <Button title="RESET GAME" handleClick={handleNewGame} isBig />
    </Container>
  );
};

export default StripInfo;
