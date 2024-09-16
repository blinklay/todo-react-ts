import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../slices/modalSlice";
import { AppDispatch, RootState } from "../slices";
import { useState } from "react";
import { addTodo, cancelFiltered } from "../slices/todoSlice";

interface ModalLayoutProps {
  showmodal: boolean;
}

interface ThemeProps {
  theme: string;
}

const ModalLayout = styled.div<ModalLayoutProps>`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(37, 37, 37, 0.7);
  transition: 0.3s;

  opacity: ${(props) => (props.showmodal ? "1" : "0")};
  visibility: ${(props) => (props.showmodal ? "visible" : "hidden")};
`;

const ModalBody = styled.div<ThemeProps>`
  background-color: ${(props) =>
    props.theme === "dark" ? "transparent" : "var(--color-background-main)"};
  border-radius: 16px;
  padding: 18px; 30px;
  width: 500px;
  border: 1px solid ${(props) =>
    props.theme === "dark" ? "var(--color-background-main)" : "transparent"};
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;
const Input = styled.input<ThemeProps>`
  margin-top: 25px;
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.theme === "dark"
        ? "var(--color-background-main)"
        : "var(--color-accent)"};
  color: ${(props) =>
    props.theme === "dark"
      ? "var(--color-background-main)"
      : "var(--color-accent)"};
  padding: 11px 16px;
  font-size: 16px;
  width: 100%;
  outline: none;
  background: ${(props) =>
    props.theme === "dark" ? "transparent" : "var(--color-background-main)"};

  &::placeholder {
    color: ${(props) => (props.theme === "dark" ? "#666666" : "#c3c1e5")};
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 129px;
`;
const ActionButton = styled.button`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 22px;
  cursor: pointer;
  color: ${(props) =>
    props.color === "accent" ? "#fff" : "var(--color-accent)"};
  background-color: ${(props) =>
    props.color === "accent" ? "var(--color-accent)" : "transparent"};
  border: 1px solid
    ${(props) =>
      props.color === "accent" ? "transparent" : "var(--color-accent)"};
`;

export default function Modal() {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const theme = useSelector((state: RootState) => state.theme.value);
  const { todos, temp } = useSelector((state: RootState) => state.todo);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addToList = () => {
    dispatch(closeModal());
    if (todos.length < temp.length) {
      dispatch(cancelFiltered());
    }
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <ModalLayout showmodal={isOpen}>
      <ModalBody theme={theme}>
        <Title>New Note</Title>
        <Input
          theme={theme}
          value={value}
          onChange={handleChange}
          placeholder="Input your note..."
        />

        <Actions>
          <ActionButton onClick={() => dispatch(closeModal())}>
            cancel
          </ActionButton>
          <ActionButton onClick={addToList} color="accent">
            Apply
          </ActionButton>
        </Actions>
      </ModalBody>
    </ModalLayout>
  );
}
