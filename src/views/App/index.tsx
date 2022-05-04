import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { useTodoStore } from '../../data/stores/useTodoStore';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useTodoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  useEffect(() => {
    createTask('Hello');
  }, []);

  console.log(tasks);

  return (
    <article className={styles.article}>
      <h1 className={styles.article_title}>To Do App</h1>
      <section className={styles.article_section}></section>
      <section className={styles.article_section}></section>
    </article>
  );
};
