import React, { useContext, useEffect, useState } from "react";
import CardContext from "../context/CardContext";
import bgImage from "../assets/back.png";
import {
  Container,
  Wrapper,
  FrontCard,
  BackCard,
  TextWrapper,
} from "../styles/card";

const Card = ({ card, isFlipped }) => {
  const { isMatched, hexCode } = card;
  const cardContext = useContext(CardContext);
  const { handleSelectedCards, isDisable } = cardContext;
  const [isMatchedCardDisplay, setIsMatchedCardDisplay] = useState(false);

  const handleClik = () => {
    if (!isDisable) {
      handleSelectedCards(card);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsMatchedCardDisplay(isMatched);
    }, 2000);
  }, [isMatched]);

  return (
    <Container isMatched={isMatchedCardDisplay}>
      <Wrapper>
        <div className={isFlipped ? "flipped" : ""}>
          <FrontCard className="front" color={hexCode}>
            <TextWrapper>
              <h4> {hexCode}</h4>
            </TextWrapper>
          </FrontCard>

          <BackCard>
            <img
              className="back"
              onClick={handleClik}
              src={bgImage}
              alt="background-image"
            />
          </BackCard>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Card;
