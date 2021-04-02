import React, { forwardRef } from 'react';
import style from './input.styles.module.css';

const InputComoponent = ({ value, onChange, className, type, onKeyUp, onFocus }, ref) => (
    <input
        ref={ref}
        type={type}
        className={`${style.input} ${className}`}
        onChange={onChange}
        value={value}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
    />
);

export default forwardRef(InputComoponent);
