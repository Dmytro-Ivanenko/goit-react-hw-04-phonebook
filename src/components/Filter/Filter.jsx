import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.scss';

const Filter = ({ onChangeFilter, value }) => {
	return (
		<label className={styles.label}>
			Find contacts by name
			<input
				className={styles.input}
				type="text"
				value={value}
				onChange={onChangeFilter}
			/>
		</label>
	);
};

Filter.propTypes = {
	onChangeFilter: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default Filter;
