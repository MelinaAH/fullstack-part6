import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { useQuery, useMutation, useQueryClient, QueryClient } from 'react-query';
import { getAnecdotes, updateAnecdote } from './requests';
import { useContext } from 'react';
import AnecdoteContext from './AnecdoteContext';

const App = () => {
  const queryClient = useQueryClient();

  const result = useQuery('anecdotes', getAnecdotes, { retry: false });

  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  });

  const [noticifier, noticifierDispatch] = useContext(AnecdoteContext);

  const handleVote = (anecdote) => {
    console.log('voted anecdote: ', anecdote);
    const updatedAnecdote = {
      ...anecdote, votes: anecdote.votes + 1
    };
    updateAnecdoteMutation.mutate(updatedAnecdote);
    noticifierDispatch({type: 'VOTE', payload: `anecdote "${anecdote.content} voted`});
  };

  if (result.isLoading) {
    return <div>loading data...</div>
  }

  if (result.error) {
    return <div>anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
};

export default App;
