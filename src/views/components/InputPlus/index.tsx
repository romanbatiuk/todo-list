import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputPlusProps {
  onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue]);

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.input_control}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            addTask();
          }
        }}
        placeholder="Type here..."
      />
      <button
        className={styles.input_button}
        onClick={addTask}
        aria-label="Add"
      />
    </div>
  );
};
