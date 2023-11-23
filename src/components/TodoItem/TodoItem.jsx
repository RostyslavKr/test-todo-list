import { useTodo } from "../../utils/context/useTodo";
import {
  ItemTodo,
  WrapperContent,
  Priority,
  Title,
  Button,
} from "./TodoItem.styled";
import image from "../../assets/cross.svg";

export const TodoItem = ({ todo }) => {
  const { deleteTodo } = useTodo();
  const { id, title, priority } = todo;

  return (
    <ItemTodo>
      <WrapperContent>
        <Priority>{priority}</Priority>
        <Title>{title}</Title>
      </WrapperContent>

      <Button onClick={() => deleteTodo(id)}>
        <img src={image} alt="close" />
      </Button>
    </ItemTodo>
  );
};
