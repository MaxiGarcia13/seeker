import React from 'react';
import NavbarItem from '../../atoms/NavbarItem';
import Title from '../../atoms/Title';
import pages from '../../../config/pages';
import * as styles from './header.styles.module.css';

const HeaderComponent = () => (
    <header className={styles.header}>
        <Title className={styles.header__title}>Seeker 🔍</Title>
        <nav className={styles.header__nav}>
            <ul className={styles.header__nav__items}>
                {pages.map((item) => (
                    <NavbarItem key={item.label} slug={item.slug} label={item.label} />
                ))}
            </ul>
        </nav>
    </header>
);

export default HeaderComponent;
