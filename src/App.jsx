import { useEffect, useReducer } from 'react';
import Controls from './components/Controls';
import Layout from './components/Layout';
import Title from './components/Title';
import TodoList from './components/TodoList';
import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_TODO_COMPLETED,
  init,
  initialState,
  reducer,
  SET_FILTER,
  TOGGLE_TODO,
  TOGGLE_TODO_ALL,
  UPDATE_TODO,
} from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  // const idRef = useRef(0);
  // const [list, setList] = useState([]);
  // const [filterType, setFilterType] = useState('ALL');

  useEffect(() => {
    window.localStorage.setItem('TODO', JSON.stringify(state.list));
    window.localStorage.setItem('ID', JSON.stringify(state.id));
  }, [state]);

  const changeFilterType = (type) => {
    // setFilterType(type);
    dispatch({ type: SET_FILTER, payload: type });
  };

  const filteredList = state.list.filter((item) => {
    switch (state.filterType) {
      case 'TODO':
        return !item.completed;
      case 'COMPLETE':
        return item.completed;
      default:
        return true;
    }
    // if (state.filterType === 'ALL') {
    //   return item;
    // } else if (state.filterType === 'TODO') {
    //   return !item.completed;
    // } else if (state.filterType === 'COMPLETED') {
    //   return item.completed;
    // }
  });

  const addTodoItem = (value) => {
    // setList((prevList) =>
    //   prevList.concat({
    //     id: (idRef.current += 1),
    //     text: value,
    //     completed: false,
    //   })
    // );
    dispatch({ type: ADD_TODO, payload: value });
  };

  const toggleCompletedOfTodoItem = (id) => {
    // setList((prevList) =>
    //   prevList.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, completed: !item.completed };
    //     } else {
    //       return item;
    //     }
    //   })
    // );
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  const toggleCompletedAll = (flag) => {
    // setList((prevList) =>
    //   prevList.map((item) => ({ ...item, completed: flag }))
    // );
    dispatch({ type: TOGGLE_TODO_ALL, payload: flag });
  };

  const deleteTodoItem = (id) => {
    // setList((prevList) => prevList.filter((item) => item.id !== id));
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const deleteCompletedTodoItem = () => {
    // setList((prevList) => prevList.filter((item) => !item.completed));
    dispatch({ type: DELETE_TODO_COMPLETED });
  };

  const updateTodoItem = (id, text) => {
    // setList((prevList) =>
    //   prevList.map((item) => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         text: text,
    //       };
    //     }
    //     return item;
    //   })
    // );
    dispatch({ type: UPDATE_TODO, payload: { id, text } });
  };

  return (
    <>
      <Layout>
        <Title />
        <Controls
          filterType={state.filterType}
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
