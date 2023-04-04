import { createSlice } from '@reduxjs/toolkit';

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
      const updatedAnecdote = {
        ...votedAnecdote,
        votes: votes + 1
      };
      console.log('votes', votes);
      console.log('updatedAnecdote.votes', updatedAnecdote.votes);
      console.log(JSON.parse(JSON.stringify(state)));

      const anecdotesAtTheEnd = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      );
      return anecdotesAtTheEnd;
    },
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
});

export const { addVote, createAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;