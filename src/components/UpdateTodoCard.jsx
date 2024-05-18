import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';
import axios from 'axios';
function UpdateTodoCard({ todo, onCancel }) {
  const [updatedTodo, setTodo] = useState(todo);
  const { todoDispatch } = useTodoContext();
  const sumbit = async (e) => {
    e.preventDefault();
    const response = await axios.put('http://localhost:3000/todo', updatedTodo);
    todoDispatch({ type: 'updateTodo', payload: response.data });
    onCancel(false);
  };

  const updateTodoClick = (newTodo) => {
    const todo = { ...updatedTodo, ...newTodo };
    setTodo(todo);
  };

  const completeClick = (e) => {
    setTodo({ ...todo, completed: e.target.checked });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <form id="todo-form" onSubmit={sumbit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={updatedTodo.title}
                required
                onChange={(e) => updateTodoClick({ title: e.target.value })}
              />
              <label htmlFor="completed">Completed:</label>
              <input
                type="checkbox"
                id="completed"
                name="completed"
                defaultChecked={updatedTodo.completed}
                onChange={completeClick}
              />
              <div className="row">
                <button
                  className="btn btn-second"
                  onClick={() => onCancel(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateTodoCard;
