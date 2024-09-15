import styled from "styled-components";
import Container from "./Container";
import Search from "./Search";
import ThemeButton from "./ThemeButton";
import AddButton from "./AddButton";
import ToDoList from "./TodoList";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../slices/modalSlice";

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

export default function TodoLayout() {
  const isOpen = useSelector((state) => state.modal.isOpen);
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

        <ToDoList />
      </Container>
    </>
  );
}
