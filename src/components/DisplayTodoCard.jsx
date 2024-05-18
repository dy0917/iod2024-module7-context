import { useState } from 'react';
import UpdateTodoCard from './UpdateTodoCard';
export default function DisplayTodoCard({
  todo,
  
  setEditView,
  deleteTodo,
}) {
  const onCompletedChange = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    // updateTodo(updatedTodo);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex">
          {todo.completed}
          <input
            type="checkbox"
            id="completed"
            name="completed"
            defaultChecked={todo.completed}
            onChange={() => onCompletedChange(todo)}
          />
          <h5
            className={`title ${
              todo.completed ? 'text-decoration-line-through' : ''
            }`}
          >
            {todo.title}
          </h5>
        </div>
        <a
          href="#"
          className="btn btn-danger delete"
          onClick={() => deleteTodo(todo)}
        >
          Delete
        </a>
        <a href="#" className="btn btn-primary edit" onClick={setEditView}>
          Edit
        </a>
      </div>
    </div>
  );
}
