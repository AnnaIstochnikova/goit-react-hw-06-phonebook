import { createSlice, nanoid } from '@reduxjs/toolkit';

const usersInitialState = [];

const phonebookSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        return (state = [...state, action.payload]);
      },
      prepare(userData) {
        return {
          payload: {
            userData,
            id: nanoid(),
          },
        };
      },
    },
    deleteUser(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addUser, deleteUser } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
