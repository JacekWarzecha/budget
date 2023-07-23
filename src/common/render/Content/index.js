import styled from "styled-components";
import { smallMobileMax } from "../../../core/App/theme";

export const Content = styled.p`
  margin: 0;

  @media (max-width: ${smallMobileMax}px) {
    font-size: 18px;
    margin: 0 0 16px;
  }
`;
