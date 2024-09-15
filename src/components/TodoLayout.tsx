import styled from "styled-components";
import Container from "./Container";
import Search from "./Search";
import ThemeButton from "./ThemeButton";
import AddButton from "./AddButton";
import ToDoList from "./TodoList";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../slices/modalSlice";
import { RootState } from "../slices";
import manPicture from "../assets/man.png";
import manPictureDark from "../assets/mandark.png";

const TodoHeader = styled.h1`
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  padding-top: 40px;
`;

const TodoActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
`;

const Picture = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default function TodoLayout() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <Modal />

      <Container>
        <AddButton onClick={showModal} />
        <TodoHeader>todo list</TodoHeader>

        <TodoActions>
          <Search />
          <ThemeButton />
        </TodoActions>

        {todos.length !== 0 ? (
          <ToDoList />
        ) : (
          <Picture>
            {theme === "dark" ? (
              <img src={manPictureDark} alt="man picture" />
            ) : (
              <img src={manPicture} alt="man picture" />
            )}
          </Picture>
        )}
      </Container>
    </>
  );
}
