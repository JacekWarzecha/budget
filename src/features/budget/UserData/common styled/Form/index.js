import styled from "styled-components";
import { smallMobileMax } from "../../../../../theme";

export const Form = styled.form`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: ${smallMobileMax}px) {
    display: flex;
    flex-direction: column;
  }
`;
