import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../../core/App/theme";

export const Form = styled.form`
  margin: 40px 10px;
  display: grid;
  grid-template-rows: auto auto;
  background: ${({ theme }) => theme.colors.bigBox.background};
  padding: 34px 26px;
  border-radius: 4px;
  -webkit-box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);
  -moz-box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);
  box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);

  @media (max-width: ${tabletMax}px) {
    padding: 16px 15px;
  }

  @media (max-width: ${mobileMax}px) {
    margin: 30px 10px 30px;
  }

  @media (max-width: ${smallMobileMax}px) {
    grid-gap: 10px;
    padding: 10px;
  }
`;
