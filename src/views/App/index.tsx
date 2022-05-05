import React from 'react';
import styles from './index.module.scss';
import { useTodoStore } from '../../data/stores/useTodoStore';
import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useTodoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.article_title}>To Do App</h1>
      <section className={styles.article_section}>
        <InputPlus
          onAdd={(title: string) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.article_section}>
        {!tasks.length && (
          <p className={styles.not_articles_text}>There is no one task.</p>
        )}
        {tasks.map((task) => (
          <InputTask
            id={task.id}
            key={task.id}
            title={task.title}
            onDone={removeTask}
            onEdited={updateTask}
            onRemoved={removeTask}
          />
        ))}
      </section>
    </article>
  );
};
