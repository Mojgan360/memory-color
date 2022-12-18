import {
  START_NEW_GAME,
  SELECTED_CARDS,
  RESET_SELECTED_CARDS,
  UPDATE_MATCHED_CARDS,
  UPDATE_SCORE,
  UPDATE_TRIES,
  RESET_SCORE,
  RESET_TRIES,
  DISABLE_CARD_IS_TRUE,
  DISABLE_CARD_IS_FALSE,
  GAMEOVER_IS_TRUE,
  GAMEOVER_IS_FALSE,
  UODATE_RESULT,
} from "../actions";

import { generateColor, shuffleCards } from "../utils/help";

const cardReducer = (state, { type, payload }) => {
  if (type === START_NEW_GAME) {
    let tmpCards = [];
    for (let i = 0; i < 8; i++) {
      tmpCards = [
        ...tmpCards,
        {
          ...state.singleCard,
          hexCode: generateColor(),
          isMatched: false,
        },
      ];
    }
    tmpCards = shuffleCards([...tmpCards, ...tmpCards]);

    return { ...state, cards: tmpCards };
  }
  //Seleted  cards
  if (type === SELECTED_CARDS) {
    return {
      ...state,

      selectedCards: [...state.selectedCards, payload],
    };
  }
  //Reset selectedCards from state &  be empty attar after 2 secound
  if (type === RESET_SELECTED_CARDS) {
    return { ...state, selectedCards: [] };
  }

  // When two cards are matched, update the score.
  if (type === UPDATE_SCORE) {
    return { ...state, score: state.score + 1 };
  }

  // When two cards are not matched, update the tries.
  if (type === UPDATE_TRIES) {
    return { ...state, tries: state.tries + 1 };
  }

  // when a game starts, reset set score to 0
  if (type === RESET_SCORE) {
    return { ...state, score: 0 };
  }

  // when a game starts, reset set score to 0
  if (type === RESET_TRIES) {
    return { ...state, tries: 0 };
  }

  // Check two cards that are present and have the same color
  if (type === UPDATE_MATCHED_CARDS) {
    const { cards, selectedCards } = state;

    let updateCards =
      cards &&
      cards.map((card) => {
        if (card.hexCode === selectedCards[0]?.hexCode) {
          return { ...card, isMatched: true };
        }
        return card;
      });
    return {
      ...state,
      cards: updateCards,
    };
  }

  // State update is Disable to false  so that the user can select cards
  if (type === DISABLE_CARD_IS_TRUE) {
    return { ...state, isDisable: true };
  }

  // State update is Disable to false to prevent user from selecting cards
  if (type === DISABLE_CARD_IS_FALSE) {
    return { ...state, isDisable: false };
  }

  // State update is isGameFinished to true to finished game
  if (type === GAMEOVER_IS_TRUE) {
    const { score } = state;
    if (score === 8) {
      return { ...state, isGameFinished: true };
    }
  }

  // State update is isGameFinished to false to start game
  if (type === GAMEOVER_IS_FALSE) {
    return { ...state, isGameFinished: false };
  }

  if (type === UODATE_RESULT) {
    if (state.score === 4) {
      return { ...state, results: [...state.results, state.tries] };
    }
  }
  return { ...state };

  //   throw new Error(`No Matching "${action.type}" - action type`);
};

export default cardReducer;
