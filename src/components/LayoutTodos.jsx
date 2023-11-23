import { TodoForm } from "./TodoForm/TodoForm";
import { TodoList } from "./TodoList/TodoList";
import { WrapperLayoutTodos, TitleTodos } from "./LayoutTodos.styled";

export const LayoutTodos = () => {
  return (
    <WrapperLayoutTodos>
      <TitleTodos>Shoping List</TitleTodos>
      <TodoForm />
      <TodoList />
    </WrapperLayoutTodos>
  );
};
