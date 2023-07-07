import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { smallMobileMax } from "../../theme";

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-left: 0;
  background: rgb(35, 36, 35);
  margin: 0;
  font-size: 18px;
  border-bottom: 1px solid rgb(141 112 2);

  @media (max-width: ${smallMobileMax}px) {
    font-size: 14px;
  }
`;

export const ListItem = styled.li`
  padding: 20px;
  margin: 8px 0;

  @media (max-width: ${smallMobileMax}px) {
    padding: 14px;
    margin: 2px 0;
  }
`;

export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  color: #cbaf44;
  background: rgb(51, 68, 51);
  padding: 8px 60px;
  border-radius: 4px;

  &.active {
    filter: brightness(155%);
  }

  &.hover {
    cursor: pointer;
  }

  @media (max-width: ${smallMobileMax}px) {
    padding: 5px 10px;
  }
`;
