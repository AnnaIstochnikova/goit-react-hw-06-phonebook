import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from 'redux/selectors';
import { addUser } from 'redux/usersSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const usersFromStore = useSelector(getUsers).contacts;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(usersFromStore);
  }, [usersFromStore]);

  //  useEffect(
  //     setData(usersFromStore);
  //   localStorage.setItem('Contacts', JSON.stringify(data));,
  //     [filterFromStore]
  //   );

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newName = form.elements.name.value;
    const phoneNumber = form.elements.number.value;
    const newContact = {
      name: newName,
      phoneNumber: phoneNumber,
    };
    if (usersFromStore) {
      for (const element of usersFromStore) {
        const { name } = element.userData;
        if (name === newName) {
          alert(`${name} is already in contacts`);
          return;
        }
      }
    }

    // useEffect(localStorage.setItem('Contacts', JSON.stringify(data)));

    dispatch(addUser(newContact));

    console.log(usersFromStore);
    form.reset();
  };

  useEffect(() => {
    if (usersFromStore) {
      localStorage.setItem('Contacts', JSON.stringify(data));
    }
  }, [usersFromStore, data]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <>
          <h3>Name</h3>
          <input
            className="input--name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className="button--submit" type="submit">
            Add contact
          </button>
        </>
      </form>
    </>
  );
};

// ContactForm.propTypes = {
//   h3: PropTypes.string,
//   onSubmit: PropTypes.func,
// };
