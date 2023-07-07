import styled from "styled-components";
import { smallMobileMax, turmeric } from "../../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: center;
  padding: 30px 0 30px;
  font-size: 46px;
  color: ${turmeric};
  background: rgb(35, 36, 35);
  /* border-top: 1px solid rgb(141 112 2); */

  @media (max-width: ${smallMobileMax}px) {
    font-size: 20px;
    padding: 14px 0 18px;
  }
`;
