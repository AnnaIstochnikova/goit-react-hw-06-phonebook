import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/usersSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phoneNumber = form.elements.number.value;
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
    };

    dispatch(addUser(newContact));
    form.reset();
  };
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
