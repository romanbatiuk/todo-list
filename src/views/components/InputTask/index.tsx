import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

interface InputTaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(title);

  const editTitleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditMode) {
      editTitleInputRef?.current?.focus();
    }
  }, [isEditMode]);

  return (
    <div className={styles.input}>
      <label className={styles.input_label}>
        <input
          type="checkbox"
          disabled={isEditMode}
          checked={checked}
          className={styles.input_checkbox}
          onChange={(event) => {
            setChecked(event.target.checked);

            if (event.target.checked) {
              setTimeout(() => {
                onDone(id);
              }, 500);
            }
          }}
        />
        {isEditMode ? (
          <input
            type="text"
            ref={editTitleInputRef}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                onEdited(id, value);
                setIsEditMode(false);
              }
            }}
            className={styles.input_title_edit}
          />
        ) : (
          <h3 className={styles.input_title}>{title}</h3>
        )}
      </label>

      {isEditMode ? (
        <button
          aria-label="Save"
          className={classnames(styles.input_btn, styles.input_save)}
          onClick={() => {
            onEdited(id, value);
            setIsEditMode(false);
          }}
        />
      ) : (
        <button
          aria-label="Edit"
          className={classnames(styles.input_btn, styles.input_edit)}
          onClick={() => {
            setIsEditMode(true);
          }}
        />
      )}

      <button
        aria-label="Remove"
        className={classnames(styles.input_btn, styles.input_remove)}
        onClick={() => {
          if (confirm('Are you sure ?')) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
};
