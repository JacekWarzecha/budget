import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../theme";

export default styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 25px;
  font-size: 22px;

  @media (max-width: ${tabletMax}px) {
    font-size: 20px;
  }

  @media (max-width: ${mobileMax}px) {
    margin: 0;
  }

  @media (max-width: ${smallMobileMax}px) {
    grid-gap: 5px;
  }
`;
