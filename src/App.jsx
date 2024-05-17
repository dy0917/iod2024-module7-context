import { useState } from 'react';
import { BasicNav, NewTodoForm, TodoItem } from './components';
import { Row } from 'react-bootstrap';
function App() {
  const [todos, setTodos] = useState([{ id: 1, title: 'title' }]);
  return (
    <>
      <BasicNav></BasicNav>
      <NewTodoForm></NewTodoForm>
      <h2>todo items</h2>
      <Row>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))}
      </Row>
    </>
  );
}

export default App;
