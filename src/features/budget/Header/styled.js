import styled, { css } from "styled-components";
import { smallMobileMax } from "../../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: center;
  padding: 30px 0 40px;
  font-size: 34px;
`;

export const DataBox = styled.div`
  background: rgb(35, 36, 35);
  padding: 8px;
  border-radius: 4px;
  -webkit-box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  display: flex;
  justify-content: center;

  /* @media (max-width: ${smallMobileMax}px) {
    align-self: center;
    width: 50%;
  } */
`;

export const ItemBox = styled.p`
  margin: 0 50px 0 0;
  font-size: 14px;
  padding: 10px;
  align-items: center;
  display: flex;

  ${({ date }) =>
    date &&
    css`
      font-size: 14px;
    `}
`;

export const Value = styled.span`
  font-size: 16px;
  margin-left: 5px;
  color: rgb(203, 175, 68);
`;
