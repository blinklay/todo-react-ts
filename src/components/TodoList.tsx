import styled from "styled-components";
import ToDoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../slices";

const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export default function ToDoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <List>
      {todos.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </List>
  );
}
