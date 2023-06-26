import styled from "styled-components";
import { mobileMax } from "../../../../../theme";

export const Input = styled.input`
  max-width: 100%;
  max-height: 40px;
  font-size: 18px;
  padding: 2px;
  border-radius: 4px;
  border: none;

  @media (max-width: ${mobileMax}px) {
    width: 75%;
  }
`;
