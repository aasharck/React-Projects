import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;