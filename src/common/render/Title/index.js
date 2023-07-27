import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../../core/App/theme";

export const Title = styled.h2`
  font-size: 28px;
  justify-content: space-evenly;
  display: flex;
  color: ${({ theme }) => theme.colors.bigBox.subTitle};
  font-weight: normal;

  @media (max-width: ${tabletMax}px) {
    font-size: 26px;
  }

  @media (max-width: ${mobileMax}px) {
    font-size: 24px;
  }

  @media (max-width: ${smallMobileMax}px) {
    margin: 4px 0 12px;
    font-size: 20px;
  }
`;
