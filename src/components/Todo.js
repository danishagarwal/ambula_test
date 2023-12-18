import React, { useState } from "react";
import Head from "./Head";
import TodoForm from "./TodoForm";

import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  //List of todos
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4, task: todo, completed: false }]);
  };
  console.log(todos);
  return (
    <>
      <Head />
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default Todo;
