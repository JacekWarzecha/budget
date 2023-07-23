import styled from "styled-components";
import { smallMobileMax, mobileMax } from "../../../core/App/theme";

export const RenderList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  background: ${({ theme }) => theme.colors.bigBox.background};
  border-radius: 4px;
  margin: 0 10px 60px;
  -webkit-box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);
  -moz-box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);
  box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);

  @media (max-width: ${mobileMax}px) {
    margin: 0 10px 15px;
  }

  @media (max-width: ${smallMobileMax}px) {
    padding: 10px;
  }
`;
