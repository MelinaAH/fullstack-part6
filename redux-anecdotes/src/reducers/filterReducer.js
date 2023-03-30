const filterReducer = (state = '', action) => {
  console.log('ACTION: ', action);
  switch (action.type) {
    case 'FILTERED':
      return action.payload
    default:
      return state
  }
};

export const filterView = filter => {
 return {
  type: 'FILTERED',
  payload: filter,
 }
};

export default filterReducer;