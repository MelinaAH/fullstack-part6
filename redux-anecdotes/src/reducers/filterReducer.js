import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterView(state, action) {
      const filter = action.payload;
      return filter;
    }
  }
});

export const { filterView } = filterSlice.actions;
export default filterSlice.reducer;