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
    addFilter: {
      reducer(state, action) {
        return (state = { filter: action.payload });
      },
    },
    filterUser: {
      reducer(state, action) {
        // return state;
        return (state = state.contacts.filter(
          user => user.name === action.payload
        ));
      },
    },
  },
});

export const { addUser, deleteUser, filterUser, addFilter } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
