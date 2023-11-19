import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from 'redux/selectors';
import { deleteUser } from 'redux/usersSlice';

export const ContactList = ({ user }) => {
  const usersFromStore = useSelector(getUsers).contacts;
  const [usersList, setUsersList] = useState([]);

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteUser(user.id));
  };

  useEffect(() => {
    console.log(usersFromStore);
    setUsersList(usersFromStore);
    console.log(usersList);
  }, [usersFromStore, usersList]);

  return (
    <ul>
      {usersList.map(contact => {
        const { name, phoneNumber } = contact.userData;
        console.log(contact.id);
        return (
          <li key={contact.id}>
            {name}: {phoneNumber}
            <button className="button-delete" type="button" onClick={onDelete}>
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
