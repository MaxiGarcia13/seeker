import React from 'react';
import style from './button.styles.module.css';

const ButtonComoponent = ({ type, className, onClick, children, primary }) => {
    return (
        <button
            type={type}
            className={`${style.button} ${primary && style['button--primary']} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ButtonComoponent;
