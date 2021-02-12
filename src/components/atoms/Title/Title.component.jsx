import React, { useMemo } from 'react';
import styles from './title.styles.module.css';

/**
 *
 * @param {Object} props
 * @param { "h1" | "h2" |"h3" } props.type
 * @param { String } props.className
 * @param { * } props.children
 *
 */
const TitleComponent = ({ type, children, className }) => {
    const Tag = useMemo(() => {
        switch (type) {
            case 'h2':
                return <h2 className={`${styles.h2} ${className}`}>{children}</h2>;
            case 'h3':
                return <h3 className={`${styles.h3} ${className}`}>{children}</h3>;
            default:
                return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
        }
    }, [type]);

    return Tag;
};

export default TitleComponent;
