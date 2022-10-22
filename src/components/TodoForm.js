import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Title..."
      />
      <button id="add"type="submit">ADD</button>
    </form>
  );
};

export default TodoForm;
