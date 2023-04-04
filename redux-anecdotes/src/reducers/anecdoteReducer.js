import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

//const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload.id;
      const votes = action.payload.votes;
      const votedAnecdote = state.find(anecdote =>
        anecdote.id === id);
      
      console.log(JSON.parse(JSON.stringify(state)));

      const updatedAnecdote = {
        ...votedAnecdote, votes: votes + 1
      };

      const anecdotesAtTheEnd = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      );
      return anecdotesAtTheEnd;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
});

export const { addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  }
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  }
};

export const updateVotes = (id, anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateObject(id, anecdote);
    dispatch(addVote(updatedAnecdote));
  } 
};

export default anecdoteSlice.reducer;