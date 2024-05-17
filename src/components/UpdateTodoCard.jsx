import { useState } from "react";

function UpdateTodoCard({ todo, updateTodo, onCancel }) {
  const [updatedTodo, setTodo] = useState(todo);

  const sumbit = (e) => {
    e.preventDefault();
    console.log('updatedTodo',updatedTodo);
    updateTodo(updatedTodo);
    onCancel(false);
  };

  const updateTodoClick = (newTodo) => {
    const todo = { ...updatedTodo, ...newTodo };
    setTodo(todo);
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
                onChange={(e) => updateTodo({ completed: e.target.checked })}
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
