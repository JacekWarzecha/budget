import styled from "styled-components";
import { smallMobileMax } from "../../../theme";

export const DateAdded = styled.p`
  margin: 0;

  @media (max-width: ${smallMobileMax}px) {
    font-size: 18px;
  }
`;
