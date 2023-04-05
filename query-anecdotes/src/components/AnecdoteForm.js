import { useQuery, useMutation, useQueryClient } from "react-query";
import { createAnecdote } from "../requests";
import { useContext } from "react";
import AnecdoteContext from "../AnecdoteContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const [noticifier, dispatch] = useContext(AnecdoteContext);

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote));
    },
    onError: (error) => {
      dispatch({ type: 'ADD', payload: 'too short anecdote, must have length 5 or more' });
    }
  });

  const onCreate = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (content.length < 5) {
      dispatch({ type: 'ADD', payload: 'too short anecdote, must have length 5 or more' });
    }
    else {
      event.target.anecdote.value = '';
      console.log('new anecdote');
      newAnecdoteMutation.mutate({ content });
      dispatch({ type: 'ADD', payload: `anecdote "${content} added` });
    }
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
