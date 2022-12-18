import React, { useContext, useEffect } from "react";
import CardContext from "../context/CardContext";
import Card from "./Card";
import { Container } from "../styles/cards";

const Cards = () => {
  const cardContext = useContext(CardContext);
  const { cards, selectedCards, isGameFinished } = cardContext;

  return (
    <>
      <Container isGameFinished={isGameFinished}>
        {cards &&
          cards.map((card, index) => {
            return (
              <div key={index}>
                <Card
                  card={card}
                  isFlipped={
                    card === selectedCards[0] ||
                    card === selectedCards[1] ||
                    card.isMatched
                  }
                />
              </div>
            );
          })}
      </Container>
    </>
  );
};

export default Cards;
