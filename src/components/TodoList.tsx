import styled from "styled-components";
import ToDoItem from "./TodoItem";

const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export default function ToDoList() {
  return (
    <List>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </List>
  );
}
