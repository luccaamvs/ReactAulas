import StoreContext from './todoContent';
import TodoCreator from './todoCreator';
import TodoList from './todoList';
import todoStore from './todoStore';

import './App.css';

function App() {
  return (
    <StoreContext.Provider value={todoStore}>
      <TodoCreator />
      <TodoList />
    </StoreContext.Provider>
  );
}

export default App;
