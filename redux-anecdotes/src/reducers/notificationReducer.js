import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    votedNotification(state, action) {
      const content = action.payload;
      console.log('voted notification: ', content);
      return content;
    }
  }
});

export const showNotification = (message, time) => {
  return (dispatch) => {
    dispatch(votedNotification(message));
    setTimeout(() => {
      dispatch(votedNotification(''));
    }, time * 1000);
  };
};

export const { votedNotification } = notificationSlice.actions;
export default notificationSlice.reducer;