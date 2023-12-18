import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      console.log(value);
      setValue("");
    }
  };

  return (
    <form className="todoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input-box"
        placeholder="What is the task today?"
      />
      <button onClick={handleSubmit} className="add-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
