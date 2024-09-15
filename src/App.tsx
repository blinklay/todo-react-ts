import { createGlobalStyle } from "styled-components";
import TodoLayout from "./components/TodoLayout";
import { useSelector } from "react-redux";
import { RootState } from "./slices";

interface ThemeProps {
  theme: string;
}

const GlobalStyle = createGlobalStyle<ThemeProps>`
 body {
 background: ${(props) =>
   props.theme === "dark" ? "var(--color-background-dark)" : "#fff"};
   transition: .3s;
   color: ${(props) =>
     props.theme === "dark"
       ? "var(--color-background-main)"
       : "var(--color-text-main)"};
}
`;

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  console.log(theme);

  return (
    <>
      <GlobalStyle theme={theme} />
      <TodoLayout />
    </>
  );
}

export default App;
