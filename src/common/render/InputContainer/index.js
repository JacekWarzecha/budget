import styled from "styled-components";
import { mobileMax } from "../../../core/App/theme";

export const InputContainer = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-gap: 20px;
  margin-bottom: 12px;

  @media (max-width: ${mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
