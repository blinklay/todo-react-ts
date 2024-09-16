import styled from "styled-components";

interface AddButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>; // Типизируем onClick
}

const Button = styled.button`
  diplay: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  border-radius: 50%;
  background-color: var(--color-accent);
  position: absolute;
  bottom: 32px;
  right: 8px;
  border: none;
  cursor: pointer;
`;

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <Button onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 22.5C10.5 22.8978 10.658 23.2794 10.9393 23.5607C11.2206 23.842 11.6022 24 12 24C12.3978 24 12.7794 23.842 13.0607 23.5607C13.342 23.2794 13.5 22.8978 13.5 22.5V13.5H22.5C22.8978 13.5 23.2794 13.342 23.5607 13.0607C23.842 12.7794 24 12.3978 24 12C24 11.6022 23.842 11.2206 23.5607 10.9393C23.2794 10.658 22.8978 10.5 22.5 10.5H13.5V1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0C11.6022 0 11.2206 0.158035 10.9393 0.43934C10.658 0.720644 10.5 1.10218 10.5 1.5V10.5H1.5C1.10218 10.5 0.720644 10.658 0.43934 10.9393C0.158035 11.2206 0 11.6022 0 12C0 12.3978 0.158035 12.7794 0.43934 13.0607C0.720644 13.342 1.10218 13.5 1.5 13.5H10.5V22.5Z"
          fill="#F7F7F7"
        />
      </svg>
    </Button>
  );
}
