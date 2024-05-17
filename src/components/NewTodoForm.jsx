import { useState } from 'react';
function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ title: 'zcvhjzclvhzklcxvhjzxcvs' });

  const sumbit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const todo = Object.fromEntries(data);

    addTodo(todo);
    setTodo({ title: '' });
  };

  const updateTodo = (newTodo) => {
    const updateTodo = { ...todo, ...newTodo };
    setTodo(updateTodo);
  };

  return (
    <>
      <h2>Todo form:</h2>
      <div>
        <form id="todo-form" onSubmit={sumbit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={todo.title}
            // value={todo.title}
            onChange={(e) => updateTodo({ title: e.target.value })}
          />
          <label htmlFor="completed">Completed:</label>
          <input type="checkbox" id="completed" name="completed" />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default NewTodoForm;
