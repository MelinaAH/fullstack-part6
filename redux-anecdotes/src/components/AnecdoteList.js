import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter) {
      //filters anecdotes inside {}
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()));
      
    }
    return anecdotes.sort((a, b) => b.votes - a.votes);
  });

  const vote = (id) => {
    console.log('vote', id);
    dispatch(addVote(id));
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
};

export default AnecdoteList;