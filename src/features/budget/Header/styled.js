import styled from "styled-components";
import { smallMobileMax, tabletMax, turmeric } from "../../../core/App/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-size: 46px;
  color: ${({ theme }) => theme.colors.bigBox.subTitle};
  background: ${({ theme }) => theme.colors.bigBox.background};
  /* border-top: 1px solid rgb(141 112 2); */

  @media (max-width: ${tabletMax}px) {
    font-size: 36px;
  }

  @media (max-width: ${smallMobileMax}px) {
    font-size: 28px;
    padding: 14px 0 18px;
  }
`;
