import React from 'react';
import useLocalState from '../useLocalState';

const Todo = (props) => {
  const { item, idx, onCompletedTodo, onDeletedTodo, onEditedTodo } = props;
  const [editMode, setEditMode] = useLocalState(`editMode${idx}`, false);
  const [editedTodo, setEditedTodo] = useLocalState(`editTodo${idx}`, '');

  return (
    <li>
      <div>
        {!editMode && (
          <>
            <input type='checkbox' onChange={() => onCompletedTodo(item)} />
            {item}
            <button
              type='button'
              value='Edit'
              onClick={() => {
                setEditedTodo(item);
                setEditMode(true);
              }}
            >
              Edit
            </button>
            <button type='button' onClick={() => onDeletedTodo(item)}>
              Delete
            </button>
          </>
        )}
        {editMode && (
          <>
            <input
              type='text'
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
            <button
              type='button'
              onClick={() => {
                onEditedTodo(editedTodo, idx);
                setEditMode(false);
              }}
            >
              Save
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Todo;
