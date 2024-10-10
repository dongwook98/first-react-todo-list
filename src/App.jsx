import { useRef, useState } from 'react';
import Controls from './components/Controls';
import Layout from './components/Layout';
import Title from './components/Title';
import TodoList from './components/TodoList';

function App() {
  const idRef = useRef(0);
  const [list, setList] = useState([]);
  const [filterType, setFilterType] = useState('ALL');

  const changeFilterType = (type) => {
    setFilterType(type);
  };

  const filteredList = list.filter((item) => {
    if (filterType === 'ALL') {
      return item;
    } else if (filterType === 'TODO') {
      return !item.completed;
    } else if (filterType === 'COMPLETED') {
      return item.completed;
    }
  });

  const addTodoItem = (value) => {
    setList((prevList) =>
      prevList.concat({
        id: (idRef.current += 1),
        text: value,
        completed: false,
      })
    );
  };

  const toggleCompletedOfTodoItem = (id) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  const toggleCompletedAll = (flag) => {
    setList((prevList) =>
      prevList.map((item) => ({ ...item, completed: flag }))
    );
  };

  const deleteTodoItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const deleteCompletedTodoItem = () => {
    setList((prevList) => prevList.filter((item) => !item.completed));
  };

  const updateTodoItem = (id, text) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text: text,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Layout>
        <Title />
        <Controls
          filterType={filterType}
          changeFilterType={changeFilterType}
          addTodoItem={addTodoItem}
        />
        <TodoList
          toggleCompletedOfTodoItem={toggleCompletedOfTodoItem}
          toggleCompletedAll={toggleCompletedAll}
          deleteTodoItem={deleteTodoItem}
          deleteCompletedTodoItem={deleteCompletedTodoItem}
          updateTodoItem={updateTodoItem}
          data={filteredList}
        />
      </Layout>
    </>
  );
}

export default App;
