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
        return (state = { contacts: [...state?.contacts, action.payload] });
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
        return (state = {
          contacts: [
            ...state.contacts.filter(user => user.id !== action.payload),
          ],
        });
      },
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
