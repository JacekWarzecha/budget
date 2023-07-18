import styled, { css } from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../theme";

export const DataBox = styled.div`
  background: rgb(35, 36, 35);
  padding: 8px 0 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: ${mobileMax}px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 0 5px;
    margin-bottom: 6px;
  }

  ${({ layoutBox }) =>
    layoutBox &&
    css`
      border-bottom: 1px solid rgb(51, 68, 51);
      display: flex;
      justify-content: space-around;

      @media (max-width: ${mobileMax}px) {
        flex-wrap: wrap;
      }

      @media (max-width: ${smallMobileMax}px) {
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
    font-size: 16px;
    padding: 8px;
  }

  ${({ layout }) =>
    layout &&
    css`
      margin: 0 50px;

      @media (max-width: ${tabletMax}px) {
        margin: 0 25px;
      }

      @media (max-width: ${smallMobileMax}px) {
        flex-wrap: wrap;
        display: flex;
        margin: 0 15px;
      }
    `}

  ${({ firstColor }) =>
    firstColor &&
    css`
      color: silver;
    `}
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
    font-size: 18px;
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
