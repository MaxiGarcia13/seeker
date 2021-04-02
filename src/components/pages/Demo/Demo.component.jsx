import React from 'react';
import TitleComponent from '../../atoms/Title';
import AutoCompleteInput from '../../molecules/AutoCompleteInput';
import styles from './demo.styles.module.css';

const DemoComponent = () => (
    <div className={styles.demo}>
        <TitleComponent type='h2'>Search music</TitleComponent>
        <AutoCompleteInput className={styles.demo__autocomplte} />
    </div>
);

export default DemoComponent;
