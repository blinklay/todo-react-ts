import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerComponent = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  height: 100vh;
`;

export default function Container({ children }: ContainerProps) {
  return <ContainerComponent>{children}</ContainerComponent>;
}
