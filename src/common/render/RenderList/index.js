import styled from "styled-components";
import { smallMobileMax } from "../../../theme";

export const RenderList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  text-align: center;
  background: #232423;
  border-radius: 4px;

  @media (max-width: ${smallMobileMax}px) {
    padding: 10px;
  }
`;
