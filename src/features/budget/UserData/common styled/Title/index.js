import styled from "styled-components";
import { smallMobileMax } from "../../../../../theme";

export const Title = styled.h2`
  font-size: 28px;

  @media (max-width: ${smallMobileMax}px) {
    margin: 2px 0 6px;
    font-size: 22px;
  }
`;
