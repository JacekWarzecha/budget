import { Wrapper, Button } from "./styled";
import { switchTheme, selectIsWhiteTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isWhiteTheme = useSelector(selectIsWhiteTheme);
  // console.log(isWhiteTheme);
  return (
    <Wrapper>
      <Button onClick={() => dispatch(switchTheme())}>
        Mode:&nbsp;{isWhiteTheme ? "🕶️" : "☀️"}
      </Button>
    </Wrapper>
  );
};
