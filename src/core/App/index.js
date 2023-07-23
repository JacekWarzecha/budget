import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Navigation,
  List,
  ListItem,
  StyledNavlink,
} from "../../common/Navigation";
import DataBase from "../../features/dataBase";
import Budget from "../../features/budget/Budget";
import YearList from "../../features/yearsList";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { ThemeProvider } from "styled-components";
import { selectIsWhiteTheme } from "../../common/ThemeSwitch/themeSlice";
import { GlobalStyle } from "./Globalstyle";
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./theme";

export const App = () => {
  const isWhiteTheme = useSelector(selectIsWhiteTheme);

  return (
    <ThemeProvider theme={isWhiteTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <HashRouter>
        <Navigation>
          <List>
            <ListItem>
              <StyledNavlink to="/day">lista codzienna</StyledNavlink>
            </ListItem>
            <ListItem>
              <StyledNavlink to="/month">lista miesięczna</StyledNavlink>
            </ListItem>
            <ListItem>
              <StyledNavlink to="/year">lista roczna</StyledNavlink>
            </ListItem>
            <ListItem>
              <ThemeSwitch></ThemeSwitch>
            </ListItem>
          </List>
          <Routes>
            <Route path="/day" element={<Budget />} />
            <Route path="/month" element={<DataBase />} />
            <Route path="/year" element={<YearList />} />
            <Route path="/" element={<Navigate to="/day" replace />} />
          </Routes>
        </Navigation>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
