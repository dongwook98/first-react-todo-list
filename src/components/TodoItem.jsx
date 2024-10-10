/* eslint-disable react/prop-types */
import { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({
  id,
  text,
  completed,
  toggleCompletedOfTodoItem,
  deleteTodoItem,
  updateTodoItem,
}) {
  const [edit, setEdit] = useState(false);

  const handleEditMode = () => {
    setEdit((prev) => !prev);
  };

  const handleEditChange = (event) => {
    updateTodoItem(id, event.target.value);
  };

  return (
    <div>
      <div className='todo-item'>
        <input
          type='checkbox'
          className='todo-item-checkbox'
          checked={completed}
          onChange={toggleCompletedOfTodoItem}
        />
        {edit ? (
          <input
            className='todo-edit-input'
            type='text'
            value={text}
            onChange={handleEditChange}
          />
        ) : (
          <p className={['todo-item-text', completed && 'completed'].join(' ')}>
            {text}
          </p>
        )}
        <button className='todo-item-button' onClick={handleEditMode}>
          수정
        </button>
        <button className='todo-item-button' onClick={deleteTodoItem}>
          삭제
        </button>
      </div>
    </div>
  );
}
