import styled, { css } from "styled-components";
import { smallMobileMax, tabletMax } from "../../theme";
import { mobileMax } from "../../theme";

export const DataBox = styled.div`
  background: rgb(35, 36, 35);
  padding: 8px 0 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

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
      grid-template-columns: 2fr 2fr 3fr 3fr 3fr 2fr;

      @media (max-width: 800px) {
        flex-wrap: wrap;
        display: flex;
        padding: 8px;
      }

      @media (max-width: ${smallMobileMax}px) {
        flex-wrap: wrap;
        display: flex;
        padding: 8px;
      }
    `}
`;

export const ItemBox = styled.p`
  margin: 0 50px 0 0;
  font-size: 20px;
  padding: 10px;
  align-items: center;
  display: flex;

  @media (max-width: ${tabletMax}px) {
    font-size: 18px;
    margin: 0 35px 0 0;
  }

  @media (max-width: ${smallMobileMax}px) {
    margin: 0;
    font-size: 12px;
    padding: 8px;
  }
`;

export const Value = styled.span`
  font-size: 22px;
  margin-left: 5px;
  color: rgb(203, 175, 68);

  &:hover {
    filter: brightness(145%);
  }

  @media (max-width: ${tabletMax}px) {
    font-size: 20px;
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
