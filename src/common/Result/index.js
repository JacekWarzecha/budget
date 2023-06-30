import styled, { css } from "styled-components";
import { smallMobileMax } from "../../theme";

export const DataBox = styled.div`
  background: rgb(35, 36, 35);
  padding: 8px;
  -webkit-box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  display: flex;
  justify-content: center;

  @media (max-width: ${smallMobileMax}px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
  }

  ${({ layout }) =>
    layout &&
    css`
      box-shadow: none;
      border-bottom: 1px solid rgb(51, 68, 51);
      display: grid;
      grid-template-columns: 2fr 3fr 3fr 3fr 2fr;
    `}
`;

export const ItemBox = styled.p`
  margin: 0 50px 0 0;
  font-size: 14px;
  padding: 10px;
  align-items: center;
  display: flex;

  @media (max-width: ${smallMobileMax}px) {
    margin: 0;
    font-size: 12px;
    padding: 8px;
  }
`;

export const Value = styled.span`
  font-size: 16px;
  margin-left: 5px;
  color: rgb(203, 175, 68);

  &:hover {
    filter: brightness(145%);
  }

  @media (max-width: ${smallMobileMax}px) {
    margin-left: 0;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    filter: brightness(125%);
  }
`;
