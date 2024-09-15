import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../slices/modalSlice";
import { AppDispatch, RootState } from "../slices";

interface ModalLayoutProps {
  showmodal: boolean;
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

const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 18px; 30px;
  width: 500px;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;
const Input = styled.input`
  margin-top: 25px;
  border-radius: 5px;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  padding: 11px 16px;
  font-size: 16px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: #c3c1e5;
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
    props.color === "accent" ? "var(--color-accent)" : "#fff"};
  border: 1px solid
    ${(props) =>
      props.color === "accent" ? "transparent" : "var(--color-accent)"};
`;

export default function Modal() {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  return (
    <ModalLayout showmodal={isOpen}>
      <ModalBody>
        <Title>New Note</Title>
        <Input placeholder="Input your note..." />

        <Actions>
          <ActionButton onClick={() => dispatch(closeModal())}>
            cancel
          </ActionButton>
          <ActionButton color="accent">Apply</ActionButton>
        </Actions>
      </ModalBody>
    </ModalLayout>
  );
}
