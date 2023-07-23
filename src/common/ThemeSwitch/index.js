import { Wrapper, Button } from "./styled";
import { switchTheme, selectIsWhiteTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectIsWhiteTheme);
  console.log(theme);
  return (
    <Wrapper>
      <Button onClick={() => dispatch(switchTheme())}>
        Mode:&nbsp;{theme ? "🕶️" : "☀️"}
      </Button>
    </Wrapper>
  );
};
