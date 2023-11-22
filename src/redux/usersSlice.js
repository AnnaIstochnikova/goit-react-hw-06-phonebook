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
      // reducer(state, action) {
      //   return state.push(action.payload);
      // },
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
        state.filter = action.payload;
      },
      // return (state = {
      //   contacts: [
      //     ...state.contacts.filter(user => user.id !== action.payload),
      //   ],
      // });
    },
    // },

    addUsersFromLocalStorage: {
      reducer(state, action) {
        state = action.payload;
        console.log(action.payload);
        // return (state = {
        //   contacts: [action.payload],
        // });
      },
    },
    // filterUser: {
    //   reducer(state, action) {
    //     return {
    //       // ...state,
    //       filter: action.payload,
    //       contacts: [
    //         ...state.contacts.filter(user => user.name === action.payload),
    //       ],
    //     };
    //   },
    // reducer(state, action) {
    //   // return state;
    //   return (state = state.contacts.filter(
    //     user => user.name === action.payload
    //   ));
    // },
    // },
  },
});

export const { addUser, deleteUser, addFilter, addUsersFromLocalStorage } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
