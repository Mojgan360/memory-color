import React, { useContext } from "react";
import CardContext from "../context/CardContext";
import Button from "./Button";
import nemoImg from "../assets/nemo.png";
// import { Container, Box, ImageBox } from "../styles/MessageBox";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  color: #fff;
  z-index: ${(props) => (props.isGameFinished ? 999 : -1)};
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
`;

const Box = styled.div`
  width: 500px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  z-index: 1000;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  h1 {
    margin: 30px 0;
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const ResultBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  h2 {
    margin-top: 10px;
  }
`;

const FunnyText = styled.h2`
  margin: 20px;
  color: ${({ theme }) => theme.colors.orange};
`;

const Footer = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;
const MessageBox = () => {
  const cardContext = useContext(CardContext);
  const { isGameFinished, handlePlayagain, tries, results } = cardContext;
  return (
    <Container isGameFinished={isGameFinished}>
      {isGameFinished && (
        <Box>
          <h1>
            Game Over after <span>{tries}</span> tries!
          </h1>

          <Main>
            <ResultBox>
              <h2>Your Last Results:</h2>
              {results &&
                results.map((item, index) => {
                  return <h2 key={index}>{item} tries</h2>;
                })}
            </ResultBox>
          </Main>
          <Footer>
            <FunnyText>Try to improve your memory!</FunnyText>
            <Button title="BACK TO GAME" handleClick={handlePlayagain} />
          </Footer>
        </Box>
      )}
    </Container>
  );
};

export default MessageBox;
