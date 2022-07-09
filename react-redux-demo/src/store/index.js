import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, actions) {
      state.counter++;
    },
    decrement(state, actions) {
      state.counter--;
    },
    addBy(state, actions) {
      state.counter += actions.payload;
    },
  },
});

export const actions = counterSlice.actions
const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
