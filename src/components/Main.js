import React from "react";
import Head from "./Head";
import TodoListCard from "./TodoListCard";
import ShoppingCartCard from "./ShoppingCartCard";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Head></Head>
      <div className="body">
        <div>
          <h1>Todo List</h1>
          <Link to="/todo">
            <TodoListCard />
          </Link>
        </div>

        <div>
          <h1>Shopping Cart</h1>
          <Link to="/shop">
            <ShoppingCartCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
