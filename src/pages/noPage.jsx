import React from 'react';
import { Link } from 'react-router-dom';
import styles from './noPage.module.css';

export const NoPage = () => {
    return (
       <div className={styles.container}>
        <button className={styles.buttonBack}>
            <Link to="/">Назад</Link>
        </button>
            <h1 className={styles.header}>Такая страница не найдена</h1>
        </div>
    );
}




