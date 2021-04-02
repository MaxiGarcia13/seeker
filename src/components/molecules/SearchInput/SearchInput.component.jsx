import React, { forwardRef } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styles from './searchInput.styles.module.css';

const SearchInputComoponent = ({ value, onChange, onClick, onKeyUp, onFocus, className, inputRef, style }, ref) => {
    const handleOnclick = (ev) => {
        ev.preventDefault();

        if (typeof onClick === 'function') {
            onClick(ev);
        }
    };

    return (
        <div ref={ref} className={`${styles.inputSearch} ${className}`} style={style}>
            <Input
                ref={inputRef}
                type='search'
                className={styles.inputSearch__input}
                onChange={onChange}
                value={value}
                onKeyUp={onKeyUp}
                onFocus={onFocus}
            />
            <Button type='submit' className={styles.inputSearch__button} onClick={handleOnclick} primary>
                🔍
            </Button>
        </div>
    );
};

export default forwardRef(SearchInputComoponent);
