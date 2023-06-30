import styled from "styled-components";
import { mobileMax } from "../../theme";
import { smallMobileMax } from "../../theme";

export default styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 25px;
  margin: 30px 30px 0;
  font-size: 22px;

  @media (max-width: ${mobileMax}px) {
    margin: 0;
  }

  @media (max-width: ${smallMobileMax}px) {
    grid-gap: 5px;
  }
`;
