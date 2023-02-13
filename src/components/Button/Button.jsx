import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ type, onClickBtn, children }) => {
	return (
		<button type={type} className={styles.button} onClick={onClickBtn}>
			{children}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	onClickBtn: PropTypes.func,
	children: PropTypes.node,
};

export default Button;
