import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer';
import { showNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(newAnecdote));
    dispatch(showNotification(`you added "${content}"`));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" /> 
        <br />
        <br />
        <button type="submit">create</button>
      </form>
    </div>
  )
};

export default AnecdoteForm;
