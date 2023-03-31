import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter) {
      //filters anecdotes inside {} using immutability principle
      return [...anecdotes].filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()));
    }
    return [...anecdotes].sort((a, b) => b.votes - a.votes);
  });

  const vote = (id, votes) => {
    console.log('function vote id:', id);
    console.log('function vote votes:', votes);
    dispatch(addVote({ id, votes }));
  };

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
};

export default AnecdoteList;