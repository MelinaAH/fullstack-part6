const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

export const addVote = (id) => {
  return {
    type: 'ADD_VOTE',
    payload: { id }
  }
};

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_VOTE':
      const id = action.payload.id;
      const votedAnecdote = state.find(anecdote =>
        anecdote.id === id);
      const updatedAnecdote = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1
      };
      const anecdotesAtTheEnd = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      );
      return anecdotesAtTheEnd;
    default:
      return state;
  }
};

export default reducer;