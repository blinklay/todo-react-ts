import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../slices";
import { changeStatus, editTitle, removeTodo } from "../slices/todoSlice";
interface ItemProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface CheckboxProps {
  id: number;
  name: number;
}

interface LabelProps {
  htmlFor: number;
}

interface ThemeProps {
  theme: string;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    padding-bottom: 17px;
    border-bottom: 1px solid var(--color-accent);
  }
`;
const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input<CheckboxProps>`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
  }

  & + label::before {
    content: "";
    display: inline-block;
    cursor: pointer;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid var(--color-accent);
    border-radius: 2px;
    margin-right: 17px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &:checked + label::before {
    background-color: var(--color-accent);
    background-image: url("data:image/svg+xml,%3csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='path-1-inside-1_18_421' fill='white'%3e%3cpath d='M4.9978 14.6488L1.72853e-05 9.74756L9.55927 2.22748e-06L14.5571 4.90124L4.9978 14.6488Z'/%3e%3c/mask%3e%3cpath d='M4.9978 14.6488L3.59745 16.0767L5.02539 17.4771L6.42574 16.0491L4.9978 14.6488ZM6.39816 13.2209L1.40037 8.31962L-1.40034 11.1755L3.59745 16.0767L6.39816 13.2209ZM13.1291 3.50089L3.56986 13.2484L6.42574 16.0491L15.985 6.30159L13.1291 3.50089Z' fill='%23F7F7F7' mask='url(%23path-1-inside-1_18_421)'/%3e%3c/svg%3e");
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  max-height: 48px;
  word-break: break-all;
  overflow-y: auto;
`;

const ItemActions = styled.div`
  display: flex;
  aling-items: center;
  gap: 10px;
`;
const ActiconButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;

const Input = styled.input<ThemeProps>`
  border: none;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  outline: none;
  background: transparent;
  color: ${(props) =>
    props.theme === "dark" ? "var(--color-background-main)" : "#000"};
  border-bottom: 1px solid var(--color-accent);
  transition: 0.3s;
`;

const ToDoItem: React.FC<ItemProps> = ({ id, title, isCompleted }) => {
  const [value, setValue] = useState(title);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <Item>
      <Checkbox
        type="checkbox"
        id={id}
        name={id}
        value="yes"
        defaultChecked={isCompleted}
        onClick={() => dispatch(changeStatus(id))}
      />
      {!isEdit ? (
        <Label htmlFor={id}>
          <Title>{title}</Title>
        </Label>
      ) : (
        <Input
          theme={theme}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}

      <ItemActions>
        {isEdit ? (
          <ActiconButton
            onClick={() => {
              dispatch(editTitle({ id: id, title: value }));
              setIsEdit(false);
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_18_421" fill="white">
                <path d="M4.9978 14.6488L1.72853e-05 9.74756L9.55927 2.22748e-06L14.5571 4.90124L4.9978 14.6488Z" />
              </mask>
              <path
                d="M4.9978 14.6488L3.59745 16.0767L5.02539 17.4771L6.42574 16.0491L4.9978 14.6488ZM6.39816 13.2209L1.40037 8.31962L-1.40034 11.1755L3.59745 16.0767L6.39816 13.2209ZM13.1291 3.50089L3.56986 13.2484L6.42574 16.0491L15.985 6.30159L13.1291 3.50089Z"
                fill="#6C63FF"
                mask="url(#path-1-inside-1_18_421)"
              />
            </svg>
          </ActiconButton>
        ) : (
          <ActiconButton onClick={() => setIsEdit(true)}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736M8.67272 5.99106L11.0654 3.59837L11.0669 3.59695C11.3962 3.26759 11.5612 3.10261 11.7514 3.04082C11.9189 2.98639 12.0993 2.98639 12.2669 3.04082C12.4569 3.10257 12.6217 3.26735 12.9506 3.59625L14.4018 5.04738C14.7321 5.37769 14.8973 5.54292 14.9592 5.73337C15.0136 5.90088 15.0136 6.08133 14.9592 6.24885C14.8974 6.43916 14.7324 6.60414 14.4025 6.93398L14.4018 6.93468L12.0091 9.32736M8.67272 5.99106L12.0091 9.32736"
                stroke="#6C63FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ActiconButton>
        )}
        <ActiconButton onClick={() => dispatch(removeTodo(id))}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
              stroke="#6C63FF"
            />
            <path
              d="M14.625 3.75H3.375"
              stroke="#6C63FF"
              strokeLinecap="round"
            />
            <path
              d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
              stroke="#6C63FF"
            />
            <path d="M10.5 9V12.75" stroke="#6C63FF" strokeLinecap="round" />
            <path d="M7.5 9V12.75" stroke="#6C63FF" strokeLinecap="round" />
          </svg>
        </ActiconButton>
      </ItemActions>
    </Item>
  );
};

export default ToDoItem;
