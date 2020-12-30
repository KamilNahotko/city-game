import { v4 as uuidv4 } from "uuid";

export const addComment = (street) => ({
  type: "ADD_NEW_COMMENT",
  payload: { id: uuidv4(), street: street },
});

export const setCurrentGame = (currentGame) => ({
  type: "SET_CURRENT_GAME",
  payload: currentGame,
});
