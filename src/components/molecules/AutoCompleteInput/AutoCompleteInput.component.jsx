import React, { forwardRef, useRef, useState, useEffect } from 'react';
import SearchInput from '../SearchInput';
import Modal from '../../atoms/Modal';
import style from './autoCompleteInput.styles.module.css';

const AutoCompleteInputComponent = ({ className, children, onChange, value = '', action, ...props }, ref) => {
    const conteinerRef = useRef(null);
    const inputRef = useRef(null);
    const expandedContainerRef = useRef(null);

    const [inputValue, setInputValue] = useState(value);
    const [expand, setExpand] = useState(false);
    const [inputStyle, setInputStyle] = useState({});
    const [itemContainerStyle, setItemContainerStyle] = useState({});

    const handleOnfocus = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            show();
        }
    };

    const handleOnKeyUp = (e) => {
        e.preventDefault();

        if (e.keyCode === 13) {
            action(e);
            return reset();
        }

        if (inputValue.length > 0) {
            if (!expand) {
                show();
            }
        } else {
            reset();
            inputRef.current.focus();
        }
    };

    const handleOnChange = (e) => {
        e.preventDefault();

        if (value.length === 0) {
            setInputValue(e.target.value);
        }

        if (onChange) {
            onChange(e);
        }
    };

    const reset = () => {
        setInputStyle({});
        setExpand(false);
    };

    const show = () => {
        setBoundingCLientReact();
        setExpand(true);
    };

    const setBoundingCLientReact = () => {
        const boundingClient = conteinerRef.current.getBoundingClientRect();
        setInputStyle({
            width: `${boundingClient.width}px`,
            marginTop: `${boundingClient.top}px`,
            marginLeft: `${boundingClient.left}px`,
            height: `${boundingClient.height}px`,
        });
        setItemContainerStyle({
            width: `${boundingClient.width}px`,
            marginLeft: `${boundingClient.left}px`,
        });
    };

    const handleClickOutside = (event) => {
        if (
            expandedContainerRef.current &&
            (expandedContainerRef.current === event.target || !expandedContainerRef.current.contains(event.target))
        ) {
            reset();
        }
    };

    useEffect(() => {
        window.addEventListener('resize', setBoundingCLientReact);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', setBoundingCLientReact);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [conteinerRef.current]);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <>
            <div ref={ref} className={`${style.autocomplete} ${className}`}>
                <SearchInput
                    ref={conteinerRef}
                    inputRef={inputRef}
                    value={inputValue}
                    onChange={handleOnChange}
                    onKeyUp={handleOnKeyUp}
                    onFocus={handleOnfocus}
                    className={style.autocomplete__inputSearch}
                    {...props}
                />
            </div>

            {expand && (
                <>
                    <Modal className={style.modal}>
                        <div
                            ref={expandedContainerRef}
                            className={`${style.autocomplete} ${style['autocomplete--expand']} ${className}`}
                        >
                            <SearchInput
                                value={inputValue}
                                onChange={handleOnChange}
                                onKeyUp={handleOnKeyUp}
                                style={inputStyle}
                                className={`${style.autocomplete__inputSearch} ${style['autocomplete__inputSearch--active']}`}
                                autoFocus
                                {...props}
                            />
                            <div className={style.itemContainer} style={itemContainerStyle}>
                                {children}
                            </div>
                        </div>
                    </Modal>
                </>
            )}
        </>
    );
};

export default forwardRef(AutoCompleteInputComponent);
