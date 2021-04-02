import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.styles.module.css';

const ModalComponent = ({ children, className }) => {
    const [container, setContainer] = useState(null);
    const id = '__custom_modal';

    useEffect(() => {
        let div = document.getElementById(id);

        if (!div) {
            div = document.createElement('div');
            div.id = id;
            div.className = `${style.modal} ${className}`;
        }

        document.body.appendChild(div);
        setContainer(div);
        return () => {
            document.body.removeChild(div);
        };
    }, []);

    return !container || createPortal(children, container);
};

export default ModalComponent;
