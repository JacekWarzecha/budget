import styled from "styled-components";
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

  @media (max-width: ${smallMobileMax}px) {
    font-size: 20px;
    padding: 14px 0 18px;
  }
`;

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
