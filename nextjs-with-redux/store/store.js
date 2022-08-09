import { combineReducers, configureStore } from '@reduxjs/toolkit';

import usersSlice from './usersSlice';
import counterSlice from './counterSlice';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  usersSlice,
  counterSlice,
});

const masterReducer = (state, action) =>{
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
            counter:{
                count: state.counter.count + action.payload.counter.count,
            },
            users:{
                users:[...action.payload.users.users, ...state.users.users]
            }
        }
        return nextState;
    }else{
        return combinedReducer(state,action)
    }
}

export const makeStore = () => {
  return configureStore({
    reducer: masterReducer,
  });
};

export const wrapper = createWrapper(makeStore)