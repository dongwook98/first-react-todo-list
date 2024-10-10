/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({
  toggleCompletedOfTodoItem,
  toggleCompletedAll,
  deleteTodoItem,
  deleteCompletedTodoItem,
  updateTodoItem,
  data,
}) {
  const isAllCompleted =
    data.length > 0 && data.every((item) => item.completed);

  const completedCount = data.filter((item) => item.completed).length;

  const remainedCount = data.length - completedCount;

  return (
    <div className='todo-list'>
      <div className='todo-header'>
        <input
          type='checkbox'
          className='todo-header-checkbox'
          checked={isAllCompleted}
          onChange={(event) => {
            toggleCompletedAll(event.target.checked);
          }}
        />
        <p className='todo-header-text'>완료까지 {remainedCount}개 남았어요!</p>
        {completedCount > 0 && (
          <button
            className='todo-header-button'
            onClick={deleteCompletedTodoItem}
          >
            {completedCount}개 선택 삭제
          </button>
        )}
      </div>
      <div>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            toggleCompletedOfTodoItem={() => toggleCompletedOfTodoItem(item.id)}
            deleteTodoItem={() => deleteTodoItem(item.id)}
            updateTodoItem={updateTodoItem}
          />
        ))}
      </div>
    </div>
  );
}
