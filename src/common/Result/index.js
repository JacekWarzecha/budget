import styled, { css } from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../core/App/theme";

export const DataBox = styled.div`
  background: ${({ theme }) => theme.colors.bigBox.background};
  padding: 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
  box-shadow: -3px 21px 35px -22px rgba(61, 72, 61, 1);
  -webkit-box-shadow: -3px 21px 35px -22px rgba(61, 72, 61, 1);
  -moz-box-shadow: -3px 21px 35px -22px rgba(61, 72, 61, 1);

  @media (max-width: ${mobileMax}px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 14px 0;
    margin-bottom: 20px;
  }

  ${({ layoutBox }) =>
    layoutBox &&
    css`
      /* border-bottom: 1px solid rgb(51, 68, 51); */
      display: grid;
      grid-template-columns: 2fr 2fr 2fr 2fr 1fr;

      @media (max-width: ${mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
      }

      @media (max-width: ${smallMobileMax}px) {
        display: flex;
        flex-wrap: wrap;
      }
    `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 20px;
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
    margin: 0 14px 0 14px;
    padding: 4px;
  }

  @media (max-width: ${smallMobileMax}px) {
    margin: 0;
    font-size: 16px;
    padding: 8px;
  }

  ${({ layout }) =>
    layout &&
    css`
      margin: 0 30px;

      @media (max-width: ${tabletMax}px) {
        margin: 0 5px;
      }

      @media (max-width: ${mobileMax}px) {
        margin: 0 16px;
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
      color: ${({ theme }) => theme.colors.date};
    `}
`;

export const Value = styled.span`
  font-size: 22px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.value};

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
