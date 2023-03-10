import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';

const App = () => {
	const [contacts, setContacts] = useState(
		() => JSON.parse(localStorage.getItem('contacts')) ?? []
	);
	const [filter, setFilter] = useState('');

	const addContacts = (newContact) => {
		setContacts((prevContacts) => {
			return [...prevContacts, newContact];
		});
	};

	const removeContact = (idDelete) => {
		setContacts((prevContacts) => {
			return prevContacts.filter(({ id }) => {
				return !(id === idDelete);
			});
		});
	};

	const onChangeFilter = ({ target }) => {
		setFilter(target.value);
	};

	// set contact to localStorage
	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);
	// ---------------------------------------------------------------------

	// FORM
	const handleSubmitForm = ({ name, number }) => {
		// name check
		if (!isNameFree(name)) {
			return;
		}

		const newContact = {
			id: uniqid(),
			name: name.toLowerCase(),
			number,
		};

		// add new contact into state
		addContacts(newContact);
	};

	const isNameFree = (nameToCheck) => {
		const result = contacts.find(
			({ name }) => name.toLowerCase() === nameToCheck.toLowerCase()
		);

		if (result) {
			Notify.warning(`${nameToCheck} is already in contacts.`);
			return false;
		}

		return true;
	};

	// FILTER
	const filteredList = (filterName) => {
		return contacts.filter(({ name }) => {
			return name.toLowerCase().includes(filterName.toLowerCase());
		});
	};

	return (
		<>
			<Section title="Phonebook">
				<ContactForm onSubmitForm={handleSubmitForm} />
			</Section>

			<Section title="Contacts">
				{contacts.length > 0 ? (
					<>
						<Filter onChangeFilter={onChangeFilter} value={filter} />
						<ContactList
							contactsArr={filteredList(filter)}
							deleteFunc={removeContact}
						/>
					</>
				) : (
					<Notification message="There is no contacts"></Notification>
				)}
			</Section>
		</>
	);
};

export default App;
