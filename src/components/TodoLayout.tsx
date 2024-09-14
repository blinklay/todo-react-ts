import styled from "styled-components";
import Container from "./Container";
import Search from "./Search";
import ThemeButton from "./ThemeButton";

const TodoHeader = styled.h1`
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin-top: 40px;
`;

const TodoActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
`;

export default function TodoLayout() {
  return (
    <Container>
      <TodoHeader>todo list</TodoHeader>

      <TodoActions>
        <Search />
        <ThemeButton />
      </TodoActions>
    </Container>
  );
}
