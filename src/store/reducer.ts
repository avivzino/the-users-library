import {createSlice} from '@reduxjs/toolkit';
import {ReducerState} from '../types/store';
import {User} from '../types/common';

const initialState: ReducerState = {
  updatedUsers: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUpdatedUsers: (state, action) => {
      state.updatedUsers = action.payload;
    },
    addNewUser: (state, action) => {
      state.updatedUsers.unshift(action.payload);
    },
  },
});

export const getUpdatedUsers = (state: ReducerState): User[] =>
  state.updatedUsers;

export const {setUpdatedUsers, addNewUser} = usersSlice.actions;

export default usersSlice.reducer;
