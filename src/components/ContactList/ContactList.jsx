import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './contactList.module.scss';

const ContactList = ({ contactsArr, deleteFunc }) => {
	return (
		<ul>
			{contactsArr.map(({ id, name, number }) => {
				return (
					<li key={id} className={styles.li}>
						<p className={styles.name}>{name}:</p>
						<p className={styles.number}>{number}</p>
						<Button type="button" onClickBtn={() => deleteFunc(id)}>
							Delete
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

ContactList.propTypes = {
	contactsArr: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
	deleteFunc: PropTypes.func.isRequired,
};

export default ContactList;
