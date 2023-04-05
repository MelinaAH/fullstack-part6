import { createContext, useReducer } from "react";

const noticifierReducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return action.payload;
    case "ADD":
      return action.payload;
    default:
      return '';
  }
};

const AnecdoteContext = createContext();

export const AnecdoteContextProvider = (props) => {
  const [noticifier, noticifierDispatch] = useReducer(noticifierReducer, '');

  return (
    <AnecdoteContext.Provider value={[noticifier, noticifierDispatch]}>
      {props.children}
    </AnecdoteContext.Provider>
  )
};

export default AnecdoteContext;