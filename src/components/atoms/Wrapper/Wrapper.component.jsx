import React, { useMemo } from 'react';
import * as styles from './wrapper.styles.module.css';

/**
 *
 * @param {Object} props
 * @param { "h1" | "h2" |"h3" } props.type
 * @param { String } props.className
 * @param { * } props.children
 *
 */
const WrapperComponent = ({ withMaxWidth, children, className }) => {
    return <div className={`${styles.wrapper} ${withMaxWidth && styles.maxWidth} ${className}`}>{children}</div>;
};

export default WrapperComponent;
