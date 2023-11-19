import { createSlice, nanoid } from '@reduxjs/toolkit';

const usersInitialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        return (state = { contacts: [...state.contacts, action.payload] });
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
    deleteUser: {
      reducer(state, action) {
        const index = state.findIndex(user => user.id === action.payload);
        return state.splice(index, 1);
        // return state.contacts.filter(user => user.id !== action.payload);
      },
      // prepare(id) {
      //   return {
      //     payload: {
      //       id,
      //     },
      //   };
      // },
      // console.log(state);
      // console.log(state?.map(user => console.log(user)));
      // const index = state.filter(user => user.id !== action.payload);
      // console.log(action.payload);
      // return state.splice(index, 1);
    },
  },
});

export const { addUser, deleteUser } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
