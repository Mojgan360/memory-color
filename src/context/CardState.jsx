import React, { useReducer, useEffect } from "react";
import CardContext from "./CardContext";
import cardReducer from "./cardReducer";

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

const getLocalStorage = () => {
  let results = localStorage.getItem("result");
  if (results) {
    return JSON.parse(localStorage.getItem("result"));
  } else {
    return [];
  }
};

const initialState = {
  cards: [],
  selectedCards: [],
  tries: 0,
  score: 0,
  isDisable: false,
  isGameFinished: false,
  results: getLocalStorage(),
};

const CardState = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  // Start a new game
  const handleNewGame = () => {
    localStorage.setItem("result", JSON.stringify(state.results));

    dispatch({
      type: RESET_TRIES,
    });
    dispatch({
      type: RESET_SCORE,
    });

    dispatch({
      type: RESET_SELECTED_CARDS,
      payload: [],
    });
    dispatch({
      type: START_NEW_GAME,
    });
  };

  useEffect(() => {
    handleNewGame();
  }, []);

  useEffect(() => {
    handleGameOver();
  }, [state.score]);

  // Choose cards
  const handleSelectedCards = (card) => {
    dispatch({ type: SELECTED_CARDS, payload: card });
  };

  useEffect(() => {
    checkMatchCards();
  }, [state.selectedCards]);

  // check  two cards that are present and have the same color
  const checkMatchCards = () => {
    if (state.selectedCards[0] && state.selectedCards[1]) {
      dispatch({
        type: DISABLE_CARD_IS_TRUE,
      });
      if (state.selectedCards[0]?.hexCode === state.selectedCards[1]?.hexCode) {
        dispatch({
          type: UPDATE_MATCHED_CARDS,
        });

        dispatch({
          type: UPDATE_SCORE,
        });
        resetTurn();
      } else {
        dispatch({
          type: UPDATE_TRIES,
        });

        resetTurn();
      }
    }
  };

  // Reset Turn
  const resetTurn = () => {
    setTimeout(() => {
      dispatch({
        type: RESET_SELECTED_CARDS,
        payload: [],
      });
      dispatch({
        type: DISABLE_CARD_IS_FALSE,
      });
    }, 2000);
  };

  // Start play again game - back to home page and start new game
  const handlePlayagain = () => {
    setTimeout(() => {
      dispatch({ type: GAMEOVER_IS_FALSE });
    }, 1000);
    handleNewGame();
  };

  //
  const handleGameOver = () => {
    localStorage.setItem("results", JSON.stringify(state.results));
    dispatch({ type: UODATE_RESULT });
    setTimeout(() => {
      dispatch({ type: GAMEOVER_IS_TRUE });
    }, 2000);
  };

  return (
    <CardContext.Provider
      value={{
        ...state,
        handleSelectedCards,
        handleNewGame,
        handlePlayagain,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardState;
