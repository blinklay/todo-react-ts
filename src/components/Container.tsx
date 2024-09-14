import styled from "styled-components";

const ContainerComponent = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 0 10px;
`;

export default function Container({ children }) {
  return <ContainerComponent>{children}</ContainerComponent>;
}
