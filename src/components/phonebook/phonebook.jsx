import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { Filter } from './filter/filter';
import { ContactList } from './contact-list/contactList';
import { ContactForm } from './contact-form/contactForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/selectors';
import { addFilter, filterUser } from 'redux/usersSlice';

export const Phonebook = () => {
  const [showContactList, setShowContactList] = useState();
  // const [filter, setFilter] = useState('');
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );
  const dispatch = useDispatch();
  const users = useSelector(getUsers).contacts;
  const filterFromStore = useSelector(getUsers).filter;
  console.log(users);

  // const deleteContact = contact => {
  //   setContacts(prev => {
  //     console.log(prev);
  //     const contactsAfterDelete = [
  //       ...prev.filter(oldContact => oldContact !== contact),
  //     ];
  //     localStorage.setItem('Contacts', JSON.stringify(contactsAfterDelete));
  //     if (contactsAfterDelete.length === 0) {
  //       setShowContactList(false);
  //     }
  //     return contactsAfterDelete;
  //   });
  // };

  const findContact = event => {
    event.preventDefault();
    const search = event.target.value.toLowerCase();
    dispatch(addFilter(search));
    dispatch(filterUser(filterFromStore));
  };

  //   setContacts(prev => {
  //     const allContacts = [...prev, newContact];
  //     localStorage.setItem('Contacts', JSON.stringify(allContacts));
  //     setShowContactList(true);
  //     return allContacts;
  //   });
  //   form.reset();
  // };

  useEffect(() => {
    users !== undefined && users.length !== 0
      ? setShowContactList(true)
      : setShowContactList(false);
  }, [users]);

  // useEffect(() => {
  //   try {
  //     const contactsFromLocalStorage = localStorage.getItem('Contacts');
  //     if (contactsFromLocalStorage.length === 2) {
  //       setShowContactList(false);
  //     } else {
  //       setContacts(JSON.parse(contactsFromLocalStorage));
  //       setShowContactList(true);
  //     }
  //   } catch (error) {
  //     console.error('Get state error: ', error.message);
  //   }
  // }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {showContactList && (
        <>
          <Filter filterFn={findContact} />
        </>
      )}
      {showContactList && (
        <>
          <h2>Contacts</h2>
          <ContactList />
        </>
      )}
    </>
  );
};

// Phonebook.propTypes = {
//   contacts: PropTypes.array,
//   showContactList: PropTypes.bool,
//   filter: PropTypes.string,
//   deleteContact: PropTypes.func,
//   findContact: PropTypes.func,
//   handleSubmit: PropTypes.func,
//   allContacts: PropTypes.array,
//   filteredContacts: PropTypes.array,
//   h1: PropTypes.string,
//   h2: PropTypes.string,
// };
