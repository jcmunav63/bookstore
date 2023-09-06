import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: 'Under construction',
  reducers: {
    checkInitialState: (state) => {
      if (state === 'Under construction') {
        return 'Under construction!';
      }
      return state;
    },
  },
});

export const { checkInitialState } = categoriesSlice.actions;
export default categoriesSlice.reducer;
