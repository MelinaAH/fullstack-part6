import { useSelector, useDispatch } from 'react-redux';
import { updateVotes } from '../reducers/anecdoteReducer';
import { showNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter) {
      //filters anecdotes inside {} using immutability principle
      return [...anecdotes].filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()));
    }
    return [...anecdotes].sort((a, b) => b.votes - a.votes);
  });

  const vote = async (content, id, votes) => {
    console.log('vote function, id: ', id, ', votes: ', votes);
    
    dispatch(updateVotes(id, { content, id, votes: votes + 1 }));
    console.log('The content of voted anecdote: ', content);
    dispatch(showNotification(`you voted "${content}"`, 5));
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
            <button onClick={() => vote(anecdote.content, anecdote.id, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
};

export default AnecdoteList;