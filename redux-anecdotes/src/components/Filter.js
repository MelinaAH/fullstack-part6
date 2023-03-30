import { useDispatch } from 'react-redux';
import { filterView } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const anecdote = event.target.value;
    console.log('filtered anecdote: ', anecdote);
    dispatch(filterView(anecdote));
  };

  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} name='filter' />
    </div>
  )
};

export default Filter;