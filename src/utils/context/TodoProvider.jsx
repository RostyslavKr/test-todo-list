import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "./todoContext";

const getTodoList = () => {
  const savedTodoList = localStorage.getItem("todos");
  if (savedTodoList !== null) {
    const parsedTodoList = JSON.parse(savedTodoList);
    return parsedTodoList;
  }
  return [];
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getTodoList);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, priority) => {
    setTodos([...todos, { id: nanoid(), title, priority }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const value = React.useMemo(
    () => ({
      todos,
      addTodo,
      deleteTodo,
    }),
    [todos, addTodo, deleteTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
