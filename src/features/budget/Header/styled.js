import styled from "styled-components";
import { smallMobileMax } from "../../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: center;
  padding: 30px 0 40px;
  font-size: 34px;

  @media (max-width: ${smallMobileMax}px) {
    font-size: 20px;
    padding: 14px 0 18px;
  }
`;
