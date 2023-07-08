import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../../theme";

export const Form = styled.form`
  margin: 30px 10px;
  display: grid;
  grid-template-rows: auto auto;
  background: rgb(35, 36, 35);
  padding: 22px 15px;
  border-radius: 4px;
  -webkit-box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);
  -moz-box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);
  box-shadow: -3px 5px 56px -22px rgba(61, 72, 61, 1);

  @media (max-width: ${tabletMax}px) {
    padding: 16px 15px;
  }

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