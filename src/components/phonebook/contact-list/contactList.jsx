import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from 'redux/selectors';
import { addUsersFromLocalStorage, deleteUser } from 'redux/usersSlice';

export const ContactList = () => {
  const usersFromStore = useSelector(getUsers).contacts;
  const [usersList, setUsersList] = useState([]);
  const filter = useSelector(getUsers).filter;

  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteUser(contactId));
    setUsersList(usersFromStore);
  };

  useEffect(() => {
    try {
      const contactsFromLocalStorage = localStorage.getItem('Contacts');
      const data = JSON.parse(contactsFromLocalStorage);
      console.log(data);
      setUsersList(data);
    } catch (error) {
      console.error('Error ', error.message);
    }
  }, []);

  useEffect(() => {
    console.log(filter);
    setUsersList(prev => {
      const allContacts = [...prev, ...usersFromStore];
      // if (filter) {
      //   console.log(allContacts);
      //   allContacts.filter(contact => contact.userData.name.includes(filter));
      // }
      console.log(allContacts);
      return allContacts;
    });
  }, [usersFromStore, filter]);

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(usersList));
    dispatch(addUsersFromLocalStorage(usersList));
  }, [usersList, dispatch]);

  return (
    <ul>
      {usersList.map(contact => {
        console.log(usersList);
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
