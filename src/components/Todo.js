import React, { useEffect, useState } from "react";
import Head from "./Head";
import TodoForm from "./TodoForm";

import { v4 as uuidv4 } from "uuid";
import TodoDisplay from "./TodoDisplay";

const Todo = () => {
  //List of todos
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  console.log(todos);
  return (
    <>
      <Head />
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoDisplay key={todo.id} task={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Todo;
