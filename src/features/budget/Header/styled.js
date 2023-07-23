import styled from "styled-components";
import { smallMobileMax, tabletMax, turmeric } from "../../../core/App/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: center;
  padding: 25px 0;
  font-size: 46px;
  color: ${turmeric};
  background: rgb(35, 36, 35);
  /* border-top: 1px solid rgb(141 112 2); */

  @media (max-width: ${tabletMax}px) {
    font-size: 36px;
  }

  @media (max-width: ${smallMobileMax}px) {
    font-size: 28px;
    padding: 14px 0 18px;
  }
`;
