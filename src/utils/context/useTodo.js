import React from "react";
import { TodoContext } from "./todoContext";

export const useTodo = () => React.useContext(TodoContext);
