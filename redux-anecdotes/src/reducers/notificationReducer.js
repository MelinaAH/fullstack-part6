import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'some notification',
  reducers: {
    showNotification(state, action) {
      const message = action.payload;
      return state;
    }
  }
});

export const { showNotification } = notificationSlice.actions;
export default notificationSlice.reducer;