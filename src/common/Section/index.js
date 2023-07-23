import styled from "styled-components";
import { smallMobileMax, mobileMax, tabletMax } from "../../core/App/theme";

export default styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 25px;
  font-size: 22px;

  @media (max-width: ${tabletMax}px) {
    font-size: 20px;
  }

  @media (max-width: ${mobileMax}px) {
    font-size: 18px;
    margin: 0;
  }

  @media (max-width: ${smallMobileMax}px) {
    grid-gap: 5px;
  }
`;
