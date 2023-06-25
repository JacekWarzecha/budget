import styled from "styled-components";
import { smallMobileMax } from "../../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const DataBox = styled.div`
  align-self: end;
  background: rgb(35, 36, 35);
  padding: 8px;
  margin-right: 50px;
  border-radius: 4px;
  -webkit-box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);
  box-shadow: 3px 3px 17px -6px rgba(66, 68, 90, 1);

  @media (max-width: ${smallMobileMax}px) {
    align-self: center;
    width: 50%;
  }
`;

export const ItemBox = styled.p`
  margin: 0;
  font-size: 12px;
  margin-bottom: 4px;
`;
