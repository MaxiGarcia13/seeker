import React, { useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './navbarItem.styles.module.css';

const NavbarItemComponent = ({ slug, label }) => {
    const match = useRouteMatch({ path: slug, strict: true, sensitive: true });
    const isActive = useMemo(() => match && match.isExact, [match]);

    return (
        <li className={`${styles.header__nav__items__item} ${isActive && styles.active}`}>
            <Link to={slug}>{label}</Link>
        </li>
    );
};

export default NavbarItemComponent;
