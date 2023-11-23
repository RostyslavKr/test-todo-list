import { useTodo } from "../../utils/context/useTodo";
import { TodoItem } from "../TodoItem/TodoItem";
import { ListTodos } from "./TodoList.styled";
export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <ListTodos>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListTodos>
  );
};
