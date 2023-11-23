import { useState } from "react";
import { useTodo } from "../../utils/context/useTodo";
import { FormTodo, Input, Select, Button } from "./TodoForm.styled";

const priorityList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];

export const TodoForm = () => {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please enter a title and priority");
    } else {
      addTodo(title, priority);
      setTitle("");
    }
  };

  return (
    <FormTodo>
      <Input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
        {priorityList.map((p) => (
          <option value={p} key={p}>
            {p}
          </option>
        ))}
      </Select>
      <Button onClick={(e) => handleSubmit(e)} type="submit">
        Add
      </Button>
    </FormTodo>
  );
};
