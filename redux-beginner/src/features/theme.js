import { createSlice } from '@reduxjs/toolkit';

const initialStateVal = "";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {value: initialStateVal},
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;