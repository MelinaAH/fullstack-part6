import { useQuery, useMutation, useQueryClient } from "react-query";
import { createAnecdote } from "../requests";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote));
    },
  });

  const onCreate = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    console.log('new anecdote');
    newAnecdoteMutation.mutate({ content });
};

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
