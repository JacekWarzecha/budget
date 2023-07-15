import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation, List, ListItem, StyledNavlink } from "./common/Navigation";
import DataBase from "./features/dataBase";
import Budget from "./features/budget/Budget";
import YearList from "./features/yearsList";

export default () => (
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
      </List>
      <Routes>
        <Route path="/day" element={<Budget />} />
        <Route path="/month" element={<DataBase />} />
        <Route path="/year" element={<YearList />} />
        <Route path="/" element={<Navigate to="/day" replace />} />
      </Routes>
    </Navigation>
  </HashRouter>
);
