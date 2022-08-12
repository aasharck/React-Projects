import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

const combinedReducer = combineReducers({
  counterReducer,
  userReducer,
});

const masterReducer = (state, action) => {
    if(action.type === HYDRATE){
        const newState = {
            ...state,
            counterReducer: {
                value: state.counterReducer.value + action.payload.masterReducer.counterReducer.value,
            },
            userReducer: {
                users: [...action.payload.masterReducer.userReducer.users, ...state.userReducer.users]
            }
        }
        return newState;
    }else{
        return combinedReducer(state, action)
    }
}

export const store = configureStore({
  reducer: {
    masterReducer,
  },
});

const makestore = () => store;
export const wrapper = createWrapper(makestore);