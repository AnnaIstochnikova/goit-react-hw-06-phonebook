import PropTypes from 'prop-types';

import { Filter } from './filter/filter';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/usersSlice';
import { ContactList } from './contact-list/contactList';
import { ContactForm } from './contact-form/contactForm';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const findContact = event => {
    event.preventDefault();
    const search = event.target.value;
    dispatch(addFilter(search));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter filterFn={findContact} />
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
};

// Phonebook.propTypes = {
//   deleteContact: PropTypes.func,
//   findContact: PropTypes.func,
//   handleSubmit: PropTypes.func,
//   allContacts: PropTypes.array,
//   filteredContacts: PropTypes.array,
//   h1: PropTypes.string,
//   h2: PropTypes.string,
// };
