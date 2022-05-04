import React from 'react';
import styles from './index.module.scss';

export const App: React.FC = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.article_title}>To Do App</h1>
      <section className={styles.article_section}></section>
      <section className={styles.article_section}></section>
    </article>
  );
};
