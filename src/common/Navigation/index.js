import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobileMax, smallMobileMax, tabletMax } from "../../core/App/theme";

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0 0 10px;
  background: ${({ theme }) => theme.colors.bigBox.background};
  margin: 0;
  font-size: 18px;

  @media (max-width: ${smallMobileMax}px) {
    font-size: 17px;
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  padding: 20px;
  margin: 8px 0;

  @media (max-width: ${mobileMax}px) {
    padding: 12px 5px;
  }

  @media (max-width: ${smallMobileMax}px) {
    padding: 8px 14px;
    margin: 2px 0;
    width: 100%;
    text-align: center;
  }
`;

export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.smallBox.text};
  background: ${({ theme }) => theme.colors.smallBox.background};
  padding: 8px 60px;
  border-radius: 4px;

  &.active {
    filter: brightness(125%);
  }

  &:hover {
    filter: brightness(125%);
    cursor: pointer;
  }

  @media (max-width: ${tabletMax}px) {
    padding: 8px 20px;
  }

  @media (max-width: ${mobileMax}px) {
    padding: 8px 14px;
  }

  @media (max-width: ${smallMobileMax}px) {
    padding: 6px 20px;
    display: block;
  }
`;
