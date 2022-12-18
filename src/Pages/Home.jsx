import React, { useContext, useEffect } from "react";
import Cards from "../components/Cards";
import MessageBox from "../components/MessageBox";
import StripInfo from "../components/StripInfo";
import { Container, Wrapper } from "../styles/Home";
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <StripInfo />
        <Cards />
      </Wrapper>
      <MessageBox />
    </Container>
  );
};

export default Home;
