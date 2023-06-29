import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation, List, ListItem, StyledNavlink } from "./common/Navigation";
import DataBase from "./features/dataBase";
import Budget from "./features/budget/Budget";

export default () => (
  <HashRouter>
    <Navigation>
      <List>
        <ListItem>
          <StyledNavlink to="/specyfikacja">budżet</StyledNavlink>
        </ListItem>
        <ListItem>
          <StyledNavlink to="/tablica">tablica danych</StyledNavlink>
        </ListItem>
      </List>
      <Routes>
        <Route path="/specyfikacja" element={<Budget />} />
        <Route path="/tablica" element={<DataBase />} />
        <Route path="/" element={<Navigate to="/specyfikacja" replace />} />
      </Routes>
    </Navigation>
  </HashRouter>
);
