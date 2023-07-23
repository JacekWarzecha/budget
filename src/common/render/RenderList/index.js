import styled from "styled-components";
import { smallMobileMax, mobileMax } from "../../../core/App/theme";

export const RenderList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  background: #232423;
  border-radius: 4px;
  margin: 0 10px 60px;

  @media (max-width: ${mobileMax}px) {
    margin: 0 10px 15px;
  }

  @media (max-width: ${smallMobileMax}px) {
    padding: 10px;
  }
`;
