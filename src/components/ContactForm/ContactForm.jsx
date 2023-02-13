import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import styles from './contactForm.module.scss';

const ContactForm = ({ onSubmitForm }) => {
	const [state, setState] = useState({
		name: '',
		number: '',
	});

	const onChangeInput = ({ target }) => {
		setState((prevState) => {
			return { ...prevState, [target.name]: target.value };
		});
	};

	const handleSubmit = (evn) => {
		evn.preventDefault();
		onSubmitForm(state);
		evn.target.reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label className={styles.label} htmlFor="name">
				Name
			</label>
			<input
				className={styles.input}
				type="text"
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				onChange={onChangeInput}
				required
			/>

			<label className={styles.label} htmlFor="number">
				Number
			</label>
			<input
				className={styles.input}
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				onChange={onChangeInput}
				required
			/>

			<Button type="submit">Add contact</Button>
		</form>
	);
};

ContactForm.propTypes = { onSubmitForm: PropTypes.func.isRequired };

export default ContactForm;
