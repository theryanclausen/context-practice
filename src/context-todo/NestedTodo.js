import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const InnerTodoNest = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

const NestedTodo = () => {
  return (
    <div>
      <InnerTodoNest />
    </div>
  );
};

export default NestedTodo;
