import { useState } from "react";
import UpdateTodoCard from "./UpdateTodoCard";
import DisplayTodoCard from "./DisplayTodoCard";
export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEdit, setEditState] = useState(false);

  const setEditView = (bool = true) => {
    setEditState(bool);
  };
  return (
    <div className="col-12 col-sm-6 col-md-3">
      {isEdit ? (
        <UpdateTodoCard
          todo={todo}
          onCancel={setEditView}
          updateTodo={updateTodo}
        ></UpdateTodoCard>
      ) : (
        <DisplayTodoCard
          todo={todo}
          setEditView={setEditView}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        ></DisplayTodoCard>
      )}
    </div>
  );
}
