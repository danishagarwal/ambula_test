import React from "react";

const TodoDisplay = ({ task, deleteTodo }) => {
  return (
    <div className="dis-container">
      <p>{task.task}</p>

      <div className="del">
        {console.log(task.id)}
        <button
          onClick={() => {
            deleteTodo(task.id);
          }}
        >
          Delete todo
        </button>
      </div>
    </div>
  );
};

export default TodoDisplay;
