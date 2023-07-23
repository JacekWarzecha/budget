import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../../core/App/theme";

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.bigBox.subTitle};
  margin: 10px 0 30px;
  text-align: center;
  font-size: 30px;
  font-weight: normal;

  @media (max-width: ${tabletMax}px) {
    font-size: 26px;
    margin: 10px 0px 24px;
  }

  @media (max-width: ${mobileMax}px) {
    font-size: 24px;
    margin: 0px 0px 16px;
  }

  @media (max-width: ${smallMobileMax}px) {
    font-size: 20px;
    margin: 0px 0px 6px;
  }
`;
