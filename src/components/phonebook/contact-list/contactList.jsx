import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from 'redux/selectors';
import {
  addUser,
  addUsersFromLocalStorage,
  deleteUser,
} from 'redux/usersSlice';

export const ContactList = ({ user }) => {
  const usersFromStore = useSelector(getUsers).contacts;
  const [usersList, setUsersList] = useState([]);

  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteUser(contactId));
    // setUsersList(usersFromStore);
  };

  useEffect(() => {
    try {
      const contactsFromLocalStorage = localStorage.getItem('Contacts');
      const data = JSON.parse(contactsFromLocalStorage);
      console.log(data);
      setUsersList(data);
      return;
    } catch (error) {
      console.error('Error ', error.message);
    }
  }, []);

  console.log(usersList);
  return (
    <ul>
      {usersList.map(contact => {
        const { name, phoneNumber } = contact.userData;
        return (
          <li key={contact.id}>
            {name}: {phoneNumber}
            <button
              className="button-delete"
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   listItems: PropTypes.array,
//   onDelete: PropTypes.func,
//   id: PropTypes.string,
// };
