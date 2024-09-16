import { createGlobalStyle } from "styled-components";
import TodoLayout from "./components/TodoLayout";
import { useSelector } from "react-redux";
import { RootState } from "./slices";

interface ThemeProps {
  themes: string;
}

const GlobalStyle = createGlobalStyle<ThemeProps>`
 body {
 background: ${(props) =>
   props.themes === "dark" ? "var(--color-background-dark)" : "#fff"};
   transition: .3s;
   color: ${(props) =>
     props.themes === "dark"
       ? "var(--color-background-main)"
       : "var(--color-text-main)"};
}
`;

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <>
      <GlobalStyle themes={theme} />
      <TodoLayout />
    </>
  );
}

export default App;
