import styled from "styled-components";
import { smallMobileMax } from "../../../../../theme";

export const ItemWrapper = styled.div`
  margin: 0;
  padding: 20px;
  display: grid;
  grid-template-columns: 5fr 3fr 3fr 1fr;
  border-bottom: 1px solid rgb(51, 68, 51);
  margin-bottom: 10px;
  justify-items: left;

  @media (max-width: ${smallMobileMax}px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding: 6px;
  }
`;

export const ItemEnd = styled.div`
  justify-content: center;
  padding: 20px;
  display: flex;

  @media (max-width: ${smallMobileMax}px) {
    padding: 8px;
  }
`;
