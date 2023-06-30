import styled from "styled-components";
import { smallMobileMax } from "../../../theme";
import { mobileMax } from "../../../theme";

export const Form = styled.form`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  background: rgb(35, 36, 35);
  padding: 22px;
  border-radius: 4px;

  @media (max-width: ${mobileMax}px) {
  }

  @media (max-width: ${smallMobileMax}px) {
    margin: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 10px;
    padding: 10px;
  }
`;
